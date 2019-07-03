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

export default {
  ["Defender"]: {
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
  },
  ["Monk"]: {
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
  },
  ["Barbarian"]: {
    spells: [],
    specials: [
      createSpell("Rage", "Every time you loose 10 HP you gain +1 DMG."),
      createSpell("Bleed", "Every Action Point does 1d4 DMG instead of 1 DMG."),
      createSpell("Revenge", "Whenever you get hit, retalliate with 1d4 DMG."),
      createSpell(
        "Charger",
        "Take -10 to your skill but if you hit you do +10 DMG, must be running."
      )
    ]
  },
  ["Priest"]: {
    spells: [
      createSpell("Haste", "Grant a target +5 INI for their next round. (10 INI to cast)"),
      createSpell("Heal", "Heal a target for Inate Health, 15 INI cast."),
      createSpell("Cleanse", "Remove one staus effect from a target (ex: Fatigue, Cold)"),
      createSpell(
        "Revive",
        "Bring a character back to life if they have not been dead for more than 3 rounds."
      ),
      createSpell(
        "Aura",
        "Grants +10 Aura to one target, takes all of your INI and concentration. THe aura will be active while you concentrate. Casting a spell or doing another combat action will break the Aura."
      ),
      createSpell("Bane", "1d20 + DMG to demons and undead. 10 INI."),
      createSpell(
        "Bless",
        "+5 Resist Disease, +5 Resist Poison duration, a given situation, example: While drinking in a bar, a combat or while resting."
      ),
      createSpell("Power Word Glory", "Instantly allow a target to take another action."),
      createSpell(
        "Power Word Charm",
        "A target is charmed and will not attack attack you for 5 rounds if not provoked by you."
      ),
      createSpell(
        "Power Word Heal",
        "Heal a target for 1d4. For each extra AP you can roll one more die."
      ),
      createSpell("Power Word Shield", "Increase a target's Armor by 1d4 for one round.")
    ],
    specials: [
      createSpell(
        "Power Words",
        "You can cast Power Words. They cost 3 INI and 3 AP to cast. Only one Power Word can be active on a target."
      )
    ]
  },
  ["Earth Mage"]: {
    spells: [
      createSpell("Stone Skin", "Grant +1 Armor for 5 rounds for 1 person."),
      createSpell("Strength of the Earth", "Increase STR and DMG by +1 for 5 rounds."),
      createSpell(
        "Summon Earth Elemental I",
        "You can summon an earth elemental with 20 HP, 3 Armor to fight for you. The Earth Elemental can taunt once per round and does 1d4 dmg per attack. You can only have one set of earth elementals out at one time. Costs 3 AP to summon and all of your initiative that round."
      ),
      createSpell(
        "Earth Quake",
        "You center a small Earth Quake around you. DC 12 AGI for everyone caught in the Earth Quake or they will fall down. Does 1d4 DMG to everyone in the quake. INU meter radius with a minimum of 3 meters."
      ),
      createSpell("Destroy Armor", "Detroy 1d4 of the target's armor. (10 INI to cast)"),
      createSpell("Shatter Stone", "Shatter 5kg of stone, including walls.")
    ],
    specials: [
      createSpell("Cast Earth Magic", "You can cast earth magic."),
      createSpell(
        "Slow to Anger",
        "When you have an elemental out and you get hit you share 50% of the DMG you take with your elemental. When an elemental dies you will receive the taunt and the target of the elemental will attack you."
      )
    ]
  }
};
