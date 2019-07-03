import { uuid } from "./helpers";
import data from "./data";

console.log(data);

export const createCharacter = template => {
  let newCharacter = {
    id: uuid(),
    name: template.name,
    xp: 0,
    level: 0,
    spells: [],
    specials: []
  };
  createStatistics(newCharacter);
  createSecundaryStatistics(newCharacter);
  createRace(template.race, newCharacter);
  createProfession(template.profession, newCharacter);
  createSkills(newCharacter);
  createFeats(newCharacter);
  createResistances(newCharacter);
  createGear(newCharacter);
  createWeapons(newCharacter);
  createSpecials(template.profession, newCharacter);
  createSpells(template.profession, newCharacter);

  return newCharacter;
};

const createStatistics = template => {
  template.stats = {
    str: { title: "Strength", value: 0, gear: 0, weapons: 0, specials: 0 },
    agi: { title: "Agility", value: 0, gear: 0, weapons: 0, specials: 0 },
    inu: { title: "Intuition", value: 0, gear: 0, weapons: 0, specials: 0 },
    per: { title: "Perception", value: 0, gear: 0, weapons: 0, specials: 0 },
    cha: { title: "Charisma", value: 0, gear: 0, weapons: 0, specials: 0 }
  };
};

const createSecundaryStatistics = template => {
  template.strFactor = 1;
  template.hp = 25;
  template.armor = 0;
  template.aura = 0;
  template.expertise = 0;
  template.movement = 10;
  template.initiative = 10;
  template.initiativeModifier = 0;
  template.ap = 3;
};

const createRace = (race, template) => {
  /*
None	0	0	0	0	0
Elf	0	18	18	4	10
Drawf	15	5	5	15	10
Human	10	10	10	10	10
Orc	12	12	4	4	18
Halfling	0	25	5	5	15
Rahmsha	10	10	10	10	10
Half-Elven	10	13	13	6	8
Half-Orc	12	10	7	7	14
Indir	20	0	6	18	6
Half-Indir	15	6	6	13	10
Goblin	0	10	20	0	20
*/

  switch (race.toLowerCase()) {
    case "human":
      template.stats.str.race = 10;
      template.stats.agi.race = 10;
      template.stats.inu.race = 10;
      template.stats.cha.race = 10;
      template.stats.per.race = 10;
      break;
    case "elf":
      template.stats.str.race = 0;
      template.stats.agi.race = 18;
      template.stats.inu.race = 18;
      template.stats.cha.race = 4;
      template.stats.per.race = 10;
      break;
    case "dwarf":
      template.stats.str.race = 15;
      template.stats.agi.race = 5;
      template.stats.inu.race = 5;
      template.stats.cha.race = 15;
      template.stats.per.race = 10;
      break;
    case "indir":
      template.stats.str.race = 20;
      template.stats.agi.race = 0;
      template.stats.inu.race = 6;
      template.stats.cha.race = 18;
      template.stats.per.race = 6;
      break;
    case "orc":
      template.stats.str.race = 12;
      template.stats.agi.race = 12;
      template.stats.inu.race = 4;
      template.stats.cha.race = 4;
      template.stats.per.race = 18;
      break;
  }

  template.race = {
    name: race
  };

  return template;
};

/*
None	        0	  0	0	0	0
Soldier	      18	8	0	4	4
Barbarian	    26	0	0	0	8
Defender	    20	6	4	4	0
Rogue	        2	  20	4	0	8
Druid - Dreamer	0	4	20	5	5
Druid - Shifter	15	15	0	4	0
Paladin	17	0	0	17	0
Monk	6	7	7	7	7
Earth Mage	10	0	18	6	0
Air Mage	0	10	18	6	0
Water Mage	0	10	18	6	0
Necromancer	13	0	15	6	0
Deamonologist	8	5	15	0	6
Arcanist	10	0	18	6	0
Arcane Warrior	20	0	8	6	0
Priest	8	0	20	6	0
Cleric	10	0	0	24	0
Hunter	0	8	0	8	18
*/

const createProfession = (profession, template) => {
  switch (profession.toLowerCase()) {
    case "warrior":
      template.stats.str.prof = 10;
      template.stats.agi.prof = 10;
      template.stats.inu.prof = 0;
      template.stats.cha.prof = 0;
      template.stats.per.prof = 0;
      break;
    case "defender":
    case "arcane warrior":
      template.stats.str.prof = 15;
      template.stats.agi.prof = 5;
      template.stats.inu.prof = 0;
      template.stats.cha.prof = 0;
      template.stats.per.prof = 5;
      break;
    case "barbarian":
      template.stats.str.prof = 26;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 0;
      template.stats.cha.prof = 0;
      template.stats.per.prof = 6;
      break;
    case "slayer":
      template.stats.str.prof = 20;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 0;
      template.stats.cha.prof = 12;
      template.stats.per.prof = 0;
      break;
    case "earth mage":
    case "air mage":
    case "fire mage":
    case "water mage":
      template.stats.str.prof = 0;
      template.stats.agi.prof = 10;
      template.stats.inu.prof = 18;
      template.stats.cha.prof = 4;
      template.stats.per.prof = 0;
      break;
    case "priest":
      template.stats.str.prof = 4;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 14;
      template.stats.cha.prof = 14;
      template.stats.per.prof = 0;
      break;
    case "cleric":
      template.stats.str.prof = 10;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 10;
      template.stats.cha.prof = 12;
      template.stats.per.prof = 0;
      break;
    default:
      template.stats.str.prof = 8;
      template.stats.agi.prof = 8;
      template.stats.inu.prof = 8;
      template.stats.cha.prof = 8;
      template.stats.per.prof = 8;
      break;
  }

  switch (profession.toLowerCase()) {
    case "barbarian":
    case "defender":
    case "cleric":
    case "paladin":
      template.strFactor = 2;
      break;
  }

  template.profession = {
    name: profession
  };

  return template;
};

const createSkills = template => {
  let createSkill = (title, stat) => {
    return {
      title: title,
      stat: stat,
      gear: 0,
      weapons: 0,
      specials: 0,
      bought: false, // from 1d10 to 1d20
      skilled: false, // add statistic
      professional: false, // add level
      expert: false, // add expertise
      description: "1d10 + 0",
      bonus: 0,
      xp: 0
    };
  };

  template.skills = {
    ["Weapon Skill"]: createSkill("Weapon Skill", "str"),
    ["Unarmed Combat"]: createSkill("Unarmed Combat", "str"),
    ["Defense"]: createSkill("Defense", "str"),
    ["Dodge"]: createSkill("Dodge", "agi"),
    ["Ballistic Skill"]: createSkill("Ballistic Skill", "agi"),
    ["Tactics"]: createSkill("Tactics", "inu"),
    ["Acrobatics"]: createSkill("Acrobatics", "agi"),
    ["Magic Skill"]: createSkill("Magic Skill", "inu"),
    ["Arcane Lore"]: createSkill("Arcane Lore", "inu"),
    ["Religious Magic"]: createSkill("Religious Magic", "inu"),
    ["Religion"]: createSkill("Religion", "cha"),
    ["History"]: createSkill("History", "inu"),
    ["Animal Handler"]: createSkill("Animal Handler", "cha"),
    ["Insight"]: createSkill("Insight", "per"),
    ["Slight of Hand"]: createSkill("Slight of Hand", "agi"),
    ["Deception"]: createSkill("Deception", "inu"),
    ["Charm"]: createSkill("Charm", "cha"),
    ["Interrogate"]: createSkill("Interrogate", "cha"),
    ["Haggle"]: createSkill("Haggle", "cha"),
    ["Stealth"]: createSkill("Stealth", "agi"),
    ["Guard"]: createSkill("Guard", "per"),
    ["Law"]: createSkill("Law", "inu"),
    ["Wilderness Surv"]: createSkill("Wilderness Surv.", "per"),
    ["Concoct Poison"]: createSkill("Concoct Poison", "agi"),
    ["Medicine"]: createSkill("Medicine", "inu"),
    ["Language"]: createSkill("Language", "inu"),
    ["Culture"]: createSkill("Culture", "inu")
  };
};

const createFeats = template => {
  let createFeat = (title, factor = 1, prefix = "+", postfix = "") => {
    return {
      title: title,
      rank: 0,
      gear: 0,
      weapons: 0,
      specials: 0,
      factor: factor,
      prefix: prefix,
      postfix: postfix,
      description: "",
      xp: 0
    };
  };

  template.feats = {
    ["DMG"]: createFeat("DMG"),
    ["Stamina"]: createFeat("Stamina"),
    ["Crit"]: createFeat("Crit"),
    ["Crit DMG"]: createFeat("Crit DMG"),
    ["Splash"]: createFeat("Splash", 20, "", "%"),
    ["Spash DMG"]: createFeat("Spash DMG"),
    ["Expertise"]: createFeat("Expertise"),
    ["Movement"]: createFeat("Movement", 2),
    ["Extra Attack"]: createFeat("Extra Attack", 20, "", "%"),
    ["Armor"]: createFeat("Armor"),
    ["Aura"]: createFeat("Aura"),
    ["Directed Strike"]: createFeat("Directed Strike", 1, ""),
    ["Initiative"]: createFeat("Initiative", 2),
    ["AP"]: createFeat("AP")
  };
};

const createResistances = template => {
  let createResistance = (title, stat) => {
    return {
      title: title,
      stat: stat,
      gear: 0,
      weapons: 0,
      specials: 0,
      bought: false, // from 1d10 to 1d20
      skilled: false, // add statistic
      professional: false, // add level
      expert: false, // add expertise
      description: "1d10 + 0",
      bonus: 0,
      xp: 0
    };
  };

  template.resistances = {
    ["Ice & Cold"]: createResistance("Ice & Cold", "agi"),
    ["Fire & Heat"]: createResistance("Fire & Heat", "str"),
    ["Holy"]: createResistance("Holy", "cha"),
    ["Death"]: createResistance("Death", "str"),
    ["Radiant"]: createResistance("Radiant", "per"),
    ["Poison"]: createResistance("Poison", "str"),
    ["Disease"]: createResistance("Disease", "str"),
    ["Illusion"]: createResistance("Illusion", "per"),
    ["Mental"]: createResistance("Mental", "inu")
  };
};

const createGear = template => {
  template.gear = [{ title: "Cloth", active: true, Movement: 0, Armor: 0 }];
};

const createWeapons = template => {
  template.weapons = [
    {
      id: uuid(),
      title: "Dagger",
      type: "Melee",
      stat: "str",
      active: true,
      numberOfDice: 1,
      diceSides: 4,
      constant: 1
    }
  ];
};

const createSpecials = (profession, template) => {
  template.specials = (data[profession] || {}).specials || [];
};

const createSpells = (profession, template) => {
  template.spells = (data[profession] || {}).spells || [];
};
