import { uuid } from "./helpers";

export const createCharacter = template => {
  console.log(template);
  let newCharacter = {
    id: uuid(),
    name: template.name
  };
  createStatistics(newCharacter);
  createRace(template.race, newCharacter);
  createProfession(template.race, newCharacter);
  createSkills(newCharacter);
  createFeats(newCharacter);
  createResistances(newCharacter);
  createWeapons(newCharacter);
  createSpecials(newCharacter);
  createSpells(newCharacter);

  return newCharacter;
};

const createStatistics = template => {
  template.stats = {
    str: { title: "Strength", value: 0 },
    agi: { title: "Agility", value: 0 },
    inu: { title: "Intuition", value: 0 },
    per: { title: "Perception", value: 0 },
    cha: { title: "Charisma", value: 0 }
  };
};

const createRace = (race, template) => {
  switch (race.toLowerCase()) {
    case "human":
      template.stats.str.race = 8;
      template.stats.agi.race = 8;
      template.stats.inu.race = 8;
      template.stats.per.race = 8;
      template.stats.cha.race = 8;
      break;
    case "elf":
      template.stats.str.race = 0;
      template.stats.agi.race = 20;
      template.stats.inu.race = 5;
      template.stats.per.race = 10;
      template.stats.cha.race = 0;
      break;
    case "dwarf":
      template.stats.str.race = 10;
      template.stats.agi.race = 5;
      template.stats.inu.race = 5;
      template.stats.per.race = 0;
      template.stats.cha.race = 15;
      break;
    case "indir":
      template.stats.str.race = 20;
      template.stats.agi.race = 0;
      template.stats.inu.race = 5;
      template.stats.per.race = 5;
      template.stats.cha.race = 10;
      break;
  }

  return template;
};

const createProfession = (profession, template) => {
  switch (profession.toLowerCase()) {
    case "warrior":
      template.stats.str.prof = 10;
      template.stats.agi.prof = 10;
      template.stats.inu.prof = 0;
      template.stats.per.prof = 0;
      template.stats.cha.prof = 0;
      break;
    case "defender":
    case "arcane warrior":
      template.stats.str.prof = 15;
      template.stats.agi.prof = 5;
      template.stats.inu.prof = 0;
      template.stats.per.prof = 5;
      template.stats.cha.prof = 0;
      break;
    case "barbarian":
      template.stats.str.prof = 20;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 0;
      template.stats.per.prof = 0;
      template.stats.cha.prof = 0;
      break;
    case "earth mage":
    case "air mage":
    case "fire mage":
    case "water mage":
      template.stats.str.prof = 3;
      template.stats.agi.prof = 0;
      template.stats.inu.prof = 15;
      template.stats.per.prof = 2;
      template.stats.cha.prof = 0;
      break;
  }

  return template;
};

const createSkills = template => {
  let createSkill = (title, stat) => {
    return {
      title: title,
      stat: stat,
      bought: false, // from 1d10 to 1d20
      skilled: false, // add statistic
      professional: false, // add level
      expert: false, // add expertise
      description: "1d10 + 0",
      xp: 0
    };
  };

  template.skills = {
    ["Weapon Skill"]: createSkill("Weapon Skill", "str"),
    ["Unarmed Combat"]: createSkill("Unarmed Combat", "str"),
    ["Dodge"]: createSkill("Dodge", "str"),
    ["Ballistic Skill"]: createSkill("Ballistic Skill", "str"),
    ["Tactics"]: createSkill("Tactics", "str"),
    ["Acrobatics"]: createSkill("Acrobatics", "str"),
    ["Magic Skill"]: createSkill("Magic Skill", "str"),
    ["Arcane Lore"]: createSkill("Arcane Lore", "str"),
    ["Religious Magic"]: createSkill("Religious Magic", "str"),
    ["Religion"]: createSkill("Religion", "str"),
    ["History"]: createSkill("History", "str"),
    ["Animal Handler"]: createSkill("Animal Handler", "str"),
    ["Insight"]: createSkill("Insight", "str"),
    ["Slight of Hand"]: createSkill("Slight of Hand", "str"),
    ["Deception"]: createSkill("Deception", "str"),
    ["Charm"]: createSkill("Charm", "str"),
    ["Interrogate"]: createSkill("Interrogate", "str"),
    ["Haggle"]: createSkill("Haggle", "str"),
    ["Stealth"]: createSkill("Stealth", "str"),
    ["Guard"]: createSkill("Guard", "str"),
    ["Law"]: createSkill("Law", "str"),
    ["Wilderness Surv"]: createSkill("Wilderness Surv.", "str"),
    ["Concoct Poison"]: createSkill("Concoct Poison", "str"),
    ["Medicine"]: createSkill("Medicine", "str"),
    ["Language"]: createSkill("Language", "str"),
    ["Culture"]: createSkill("Culture", "str")
  };
};

const createFeats = template => {
  let createFeat = (title, factor = 1, prefix = "+", postfix = "") => {
    return {
      title: title,
      factor: factor,
      prefix: prefix, // from 1d10 to 1d20
      postfix: postfix, // add statistic
      professional: false, // add level
      expert: false, // add expertise
      description: "1d10 + 0",
      xp: 0
    };
  };

  template.feats = {
    ["DMG"]: createFeat("DMG"),
    ["Stamina"]: createFeat("Stamina"),
    ["Crit"]: createFeat("Crit"),
    ["Crit DMG"]: createFeat("Crit DMG"),
    ["Splash"]: createFeat("Splash"),
    ["Spash DMG"]: createFeat("Spash DMG"),
    ["Expertise"]: createFeat("Expertise"),
    ["Movement"]: createFeat("Movement"),
    ["Extra Attack"]: createFeat("Extra Attack"),
    ["Armor"]: createFeat("Armor"),
    ["Aura"]: createFeat("Aura"),
    ["Directed Strike"]: createFeat("Directed Strike"),
    ["Initiative"]: createFeat("Initiative"),
    ["AP"]: createFeat("AP")
  };
};

const createResistances = template => {
  let createResistance = (title, stat) => {
    return {
      title: title,
      stat: stat,
      bought: false, // from 1d10 to 1d20
      skilled: false, // add statistic
      professional: false, // add level
      expert: false, // add expertise
      description: "1d10 + 0",
      xp: 0
    };
  };

  template.feats = {
    ["Ice & Cold"]: createResistance("Ice & Cold", "AGI"),
    ["Fire & Heat"]: createResistance("Fire & Heat", "STR"),
    ["Holy"]: createResistance("Holy", "CHA"),
    ["Death"]: createResistance("Death", "STR"),
    ["Radiant"]: createResistance("Radiant", "PER"),
    ["Poison"]: createResistance("Poison", "STR"),
    ["Disease"]: createResistance("Disease", "STR"),
    ["Illusion"]: createResistance("Illusion", "PER"),
    ["Mental"]: createResistance("Mental", "INU")
  };
};

const createWeapons = template => {
  template.weapons = [{ title: "Dagger", numberOfDice: 1, diceSides: 4, constant: 1 }];
};

const createSpecials = template => {
  template.specials = [];
};

const createSpells = template => {
  template.spells = [];
};
