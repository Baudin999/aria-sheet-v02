import { ICharacter } from "../interfaces";
import { getCharacterSkillByName } from "./data.skills";
import { getCharacterWeaponByName } from "./data.weapons";

export const statistics = {
  Human: { str: 3, dex: 3, per: 3, cha: 3, inu: 3 },
  Elf: { str: 3, dex: 3, per: 3, cha: 3, inu: 3 },
  Dwarf: { str: 3, dex: 3, per: 3, cha: 3, inu: 3 }
};

export const defaultCharacter: ICharacter = {
  name: "",
  race: "Human",
  description: "",
  xp: 0,
  hp: 25,
  ap: 3,
  skills: [getCharacterSkillByName("Sword Attack"), getCharacterSkillByName("Dodge")],
  weapons: [getCharacterWeaponByName("Blunt Sword")],
  money: 0,
  items: [],
  script: `[Attack]
Sword Attack - Blunt Sword

[Defense]
Dodge`
};
