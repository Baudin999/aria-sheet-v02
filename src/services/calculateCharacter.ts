let calculateDescription = item => {
  let stats = ["str", "agi", "per", "inu", "cha"];
  item.description = Object.keys(item)
    .filter(key => key[0] === key[0].toUpperCase() || stats.indexOf(key) > -1)
    .map(key => {
      return `${key}:${item[key]}`;
    })
    .join(", ");
  return item;
};

export const calculateCharacter = character => {
  character.xp = 0;

  // RESET THE CHARACTER FEATS
  Object.keys(character.feats).forEach(feat => {
    character.feats[feat].gear = 0;
    character.feats[feat].weapons = 0;
    character.feats[feat].specials = 0;
  });
  Object.keys(character.stats).forEach(stat => {
    character.stats[stat].gear = 0;
    character.stats[stat].weapons = 0;
    character.stats[stat].specials = 0;
  });
  Object.keys(character.skills).forEach(skill => {
    character.skills[skill].gear = 0;
    character.skills[skill].weapons = 0;
    character.skills[skill].specials = 0;
  });
  Object.keys(character.resistances).forEach(resistance => {
    character.resistances[resistance].gear = 0;
    character.resistances[resistance].weapons = 0;
    character.resistances[resistance].specials = 0;
  });

  // GEAR
  (character.gear || [])
    .map(calculateDescription)
    .filter(g => g.active)
    .forEach(g => {
      // console.log(g);
      for (var key in g) {
        character.feats[key] ? (character.feats[key].gear += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].gear += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].gear += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].gear += g[key]) : undefined;
      }
    });

  // WEAPONS
  (character.weapons || [])
    .map(calculateDescription)
    .filter(g => g.active)
    .forEach(g => {
      // console.log(g);
      for (var key in g) {
        character.feats[key] ? (character.feats[key].weapons += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].weapons += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].weapons += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].weapons += g[key]) : undefined;
      }
    });

  // SPECIALS
  (character.specials || [])
    .map(calculateDescription)
    .filter(g => g.active)
    .forEach(g => {
      for (var key in g) {
        character.feats[key] ? (character.feats[key].specials += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].specials += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].specials += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].specials += g[key]) : undefined;
      }
    });

  // STATISTICS

  for (let key in character.stats) {
    let stat = character.stats[key];
    stat.start = 5;
    stat.total = stat.start + stat.race + stat.prof + stat.gear + stat.weapons + stat.specials;
    stat.result = Math.round(stat.total / 10);
  }

  // INATE HEALING
  character.inateHealing =
    character.stats.str.result * character.strFactor +
    character.stats.agi.result +
    character.stats.inu.result +
    character.stats.per.result +
    character.stats.cha.result;

  // FEATS

  for (let key in character.feats) {
    let feat = character.feats[key];
    feat.rank = feat.rank || 0;
    feat.totalRank = feat.rank + feat.gear + feat.weapons + feat.specials;
    feat.xp = xpLookup[feat.rank];
    character.xp += +feat.xp;

    // crit behaves differently
    if (feat.title === "Crit") {
      feat.result = 20 - Math.floor(feat.totalRank / 3);
      feat.description = `${feat.result}`;
    } else if (feat.title === "Crit DMG" || feat.title === "Spash DMG") {
      feat.result = feat.totalRank * feat.factor;
      feat.description = `${feat.result}d4`;
    } else if (feat.title === "AP") {
      feat.result = feat.totalRank + 3;
      feat.description = `${feat.result} p/r`;
    } else {
      feat.result = feat.totalRank * feat.factor;
      feat.description = `${feat.prefix}${feat.result}${feat.postfix}`;
    }

    switch (feat.title) {
      case "Armor":
        character.armor = feat.description;
        break;
      case "Aura":
        character.aura = feat.description;
        break;
      case "AP":
        character.ap = feat.description;
        break;
      case "Movement":
        character.movement = 10 + feat.result;
        break;
      case "Initiative":
        character.initiative = 16 + feat.result;
        character.initiativeModifier = feat.result * -1;
        break;
    }
  }

  // SKILLS

  for (let key in character.skills) {
    let skill = character.skills[key];
    skill.baseBonus = skill.gear + skill.weapons + skill.specials;
    skill.bonus = skill.baseBonus;
    let rank = skill.expert ? 4 : skill.professional ? 3 : skill.skilled ? 2 : skill.bought ? 1 : 0;
    skill.xp = xpLookup[rank];
    character.xp += +skill.xp;
  }

  // RESISTANCES

  for (let key in character.resistances) {
    let r = character.resistances[key];
    r.baseBonus = r.gear + r.weapons + r.specials;
    r.bonus = r.baseBonus;
    let rank = r.expert ? 4 : r.professional ? 3 : r.skilled ? 2 : r.bought ? 1 : 0;
    r.xp = xpLookup[rank];
    character.xp += +r.xp;
  }

  // SPELLS
  (character.spells || []).forEach(spell => {
    spell.xp = xpLookup[spell.rank || 0];
    if (spell.xp === undefined || spell.xp === NaN) spell.xp = 999;
    character.xp += spell.xp + (spell.xpValue || 0);
  });

  // SPECIALS
  (character.specials || []).forEach(special => {
    special.xp = xpLookup[special.rank || 0];
    if (special.xp === undefined || special.xp === NaN) special.xp = 999;
    character.xp += special.xp + (special.xpValue || 0);
  });

  character.level = levelLookup(character.xp);

  character.hp = Math.round(
    character.inateHealing * (character.feats.Stamina.result / 10 + 1) * character.level
  );

  for (let key in character.skills) {
    let skill = character.skills[key];
    if (skill.skilled) {
      skill.bonus += character.stats[skill.stat].result;
    }
    if (skill.professional) {
      skill.bonus += character.level;
    }
    if (skill.expert) {
      skill.bonus += character.feats["Expertise"].totalRank;
    }
    skill.description = skill.bought ? `1d20 + ${skill.bonus}` : `1d10 + ${skill.baseBonus}`;
  }

  for (let key in character.resistances) {
    let resistance = character.resistances[key];
    if (resistance.skilled) {
      resistance.bonus += character.stats[resistance.stat].result;
    }
    if (resistance.professional) {
      resistance.bonus += character.level;
    }
    if (resistance.expert) {
      resistance.bonus += character.feats["Expertise"].totalRank;
    }
    resistance.description = resistance.bought
      ? `1d20 + ${resistance.bonus}`
      : `1d10 + ${resistance.baseBonus}`;
  }

  // UPDATE WEAPON DESCRIPTION
  character.weapons.forEach(w => {
    switch (w.type) {
      case "Melee":
        w.stat = "str";
        break;
      case "Ranged":
        w.stat = "agi";
        break;
      case "Magic":
        w.stat = "inu";
        break;
      case "Finesse":
        w.stat = "Melee";
        break;
      case "Unarmed":
        w.stat = "agi";
        break;
      default:
        w.stat = "str";
        break;
    }
    let statBonus = character.stats[w.stat || "str"].result;
    let featDMG = character.feats.DMG.result;
    w.description = `${w.numberOfDice || 1}d${w.diceSides || 4}+${(w.constant || 0) +
      statBonus +
      featDMG}`;
  });

  return character;
};

let xpLookup = [0, 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77];
let levelLookup = xp => {
  return xp < 25
    ? 1
    : xp < 35
    ? 2
    : xp < 50
    ? 3
    : xp < 70
    ? 4
    : xp < 95
    ? 5
    : xp < 125
    ? 6
    : xp < 160
    ? 7
    : xp < 200
    ? 8
    : xp < 250
    ? 9
    : xp < 300
    ? 10
    : xp < 350
    ? 11
    : xp < 400
    ? 12
    : xp < 450
    ? 13
    : xp < 500
    ? 14
    : xp < 550
    ? 15
    : xp < 600
    ? 16
    : xp < 650
    ? 17
    : xp < 700
    ? 18
    : xp < 750
    ? 19
    : xp < 800
    ? 20
    : xp < 900
    ? 21
    : xp < 1000
    ? 22
    : xp < 1100
    ? 23
    : xp < 1200
    ? 24
    : xp < 1300
    ? 25
    : xp < 1400
    ? 26
    : xp < 1500
    ? 27
    : xp < 1600
    ? 28
    : xp < 1700
    ? 29
    : 30;
};

/*
0	0	0
20	1	1
25	2	1
35	3	1
50	4	2
70	5	2
95	6	2
125	7	3
160	8	3
200	9	3
245	10	4
290	11	4
345	12	4
405	13	5
*/
