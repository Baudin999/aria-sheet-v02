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
    createSpell(
      "Astral Projection",
      "While Astral Projecting you can ignore non-permanent physical object like walls and roofs; but you can't pass through solid rock. Casters can see you with their Magical Sight. To other magically gifted people you can appear in their dreams."
    ),
    createSpell(
      "Float like a Butterfly",
      "For 3 CHI you get a +5 defense until the start of your next round."
    ),
    createSpell("Sting like a Bee", "For 3 CHI you get a 100% CRIT chance on your next attack."),
    createSpell(
      "Ignore Armor",
      "For 1 CHI you can ignore the target's armor for that attack; Only works with fists or first weapons."
    ),
    createSpell(
      "Lightning Reflexes",
      "For 3 CHI you gain +AGI armor until your next round. This only works if you wear no armor."
    ),
    createSpell("Earth, Wind & Fire", "For 1 CHI your attack counts as an Elemental Attack."),
    createSpell("Water Punch", "For 3 CHI your punch heals the target for 1/2 Inate Healing.")
  ],
  specials: []
};

export const barbarian = {
  spells: [],
  specials: [
    createSpell("Rage", "Every time you loose 10 HP you gain +1 DMG."),
    createSpell("Bleed", "Every Action Point does 1d4 DMG instead of 1 DMG."),
    createSpell("Revenge", "Whenever you get hit, retalliate with 1d4 DMG."),
    createSpell("Charger", "Take -10 to your skill but if you hit you do +10 DMG, must be running.")
  ]
};

export const priest = {
  spells: [
    createSpell("Haste", "Grant a target +5 INI for their next round. (10 INI to cast)"),
    createSpell("Heal", "Heal a target for Inate Health, 15 INI cast."),
    createSpell("Cleanse", "Remove one staus effect from a target (ex: Fatigue, Cold)")
  ],
  specials: [
    createSpell(
      "Power Words",
      "You can cast Power Words. They cost 3 INI to cast. Only one Power Word can be active on a target."
    )
  ]
};
