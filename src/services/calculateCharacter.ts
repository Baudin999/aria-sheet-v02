export const calculateCharacter = character => {
  // GEAR

  character.gear
    .filter(g => g.active)
    .forEach(g => {
      for (var key in g) {
        character.feats[key] ? (character.feats[key].gear += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].gear += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].gear += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].gear += g[key]) : undefined;
      }
    });

  // WEAPONS
  character.weapons
    .filter(g => g.active)
    .forEach(g => {
      for (var key in g) {
        character.feats[key] ? (character.feats[key].gear += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].gear += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].gear += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].gear += g[key]) : undefined;
      }
    });

  // SPECIALS
  character.specials
    .filter(g => g.active)
    .forEach(g => {
      for (var key in g) {
        character.feats[key] ? (character.feats[key].gear += g[key]) : undefined;
        character.stats[key] ? (character.stats[key].gear += g[key]) : undefined;
        character.skills[key] ? (character.skills[key].gear += g[key]) : undefined;
        character.resistances[key] ? (character.resistances[key].gear += g[key]) : undefined;
      }
    });

  // STATISTICS

  for (let key in character.stats) {
    let stat = character.stats[key];
    stat.total = stat.race + stat.prof + stat.gear + stat.weapons + stat.specials;
    stat.result = Math.round(stat.total / 10);
  }

  // FEATS

  for (let key in character.feats) {
    let feat = character.feats[key];
    feat.rank = feat.rank || 0;
    feat.totalRank = feat.rank + feat.gear + feat.weapons + feat.specials;
    feat.xp = xpLookup[feat.totalRank || 0];
    character.xp += feat.xp;

    // crit behaves differently
    if (feat.title === "Crit") {
      feat.result = 20 - Math.floor(feat.totalRank / 3);
      feat.description = `${feat.result}`;
    } else if (feat.title === "Crit DMG" || feat.title === "Spash DMG") {
      feat.result = feat.totalRank * feat.factor;
      feat.description = `${feat.result - 1}d4`;
    } else {
      feat.result = feat.totalRank * feat.factor;
      feat.description = `${feat.prefix}${feat.result}${feat.postfix}`;
    }
  }

  // SKILLS

  for (let key in character.skills) {
    let skill = character.skills[key];
    skill.bonus = skill.gear + skill.weapons + skill.specials;
    let rank = skill.expert ? 4 : skill.professional ? 3 : skill.skilled ? 2 : skill.bought ? 1 : 0;
    skill.xp = xpLookup[rank];
    character.xp += skill.xp;
  }

  // RESISTANCES

  for (let key in character.resistances) {
    let r = character.resistances[key];
    r.bonus = r.gear + r.weapons + r.specials;
    let rank = r.expert ? 4 : r.professional ? 3 : r.skilled ? 2 : r.bought ? 1 : 0;
    r.xp = xpLookup[rank];
    character.xp += r.xp;
  }

  character.level = levelLookup(character.xp);

  for (let key in character.skills) {
    let skill = character.skills[key];
    if (skill.skilled) {
      skill.bonus += character.stats[skill.stat].total;
    }
    if (skill.professional) {
      skill.bonus += character.level;
    }
    if (skill.expert) {
      skill.bonus += character.feats["Expertise"].totalRank;
    }
    skill.description = skill.bought ? `1d20 + ${skill.bonus}` : `1d10`;
  }

  for (let key in character.resistances) {
    let resistance = character.resistances[key];
    if (resistance.skilled) {
      resistance.bonus += character.stats[resistance.stat].total;
    }
    if (resistance.professional) {
      resistance.bonus += character.level;
    }
    if (resistance.expert) {
      resistance.bonus += character.feats["Expertise"].totalRank;
    }
    resistance.description = resistance.bought ? `1d20 + ${resistance.bonus}` : `1d10`;
  }

  // UPDATE WEAPON DESCRIPTION
  character.weapons.forEach(w => {
    let statBonus = character.stats[w.stat || "str"].result;
    let featDMG = character.feats.DMG.result;
    w.description = `${w.numberOfDice}d${w.diceSides}+${w.constant + statBonus + featDMG}`;
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