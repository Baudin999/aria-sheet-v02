import { uuid } from "./helpers";

let createSpell = (title, notes = "", other = {}) => {
  return {
    id: uuid(),
    title,
    notes,
    rank: 0,
    xpValue: 0,
    ...other
  };
};

export const defender = {
  spells: [
    createSpell(
      "Taunt",
      "Can taunt a target for one turn for 1 AP, taunt can be resisted with a DC 16 against Mental Attacks."
    ),
    createSpell(
      "Intervene",
      "Can quickly move between allies on the battle field, regardless of your movement speed. Only works if the ally is in combat. Max range of 10m + level meters."
    ),
    createSpell(
      "Positioning",
      "For 2 AP you can position your target in such a way that a party memeber in combat with that target can make an extra attack."
    ),
    createSpell(
      "Splashing",
      "Your spash hits refresh the taunt on your target and apply it to 1 other character."
    )
  ],
  specials: [createSpell("Unshaken", "Cannot be knocked down")]
};

export const monk = {
  spells: [
    createSpell("Meditate", "Regenerate 1 CHI per 3 INI when meditating in your round."),
    createSpell(
      "Spirit Sprint",
      "As long as there is a surface you can run on/against it. This incudes but is not limited to: water, walls or tree tops. While Spirit Sprinting you cannot attack and each attack which lands will do double DMG."
    ),
    createSpell("Astral Projection", ""),
    createSpell("Float like a Butterfly"),
    createSpell("Sting like a Bee"),
    createSpell("Ignore Armor"),
    createSpell("Lightning Reflexes"),
    createSpell("Earth, Wind & Fire"),
    createSpell("Water Punch"),
    createSpell("Way of the Iron Fist")
  ]
};
