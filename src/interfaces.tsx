export enum SkillTypes {
  Melee = "Melee",
  Ranged = "Ranged",
  Magic = "Magic",
  Defense = "Defense"
}

export enum WeaponTypes {
  Sword = "Sword",
  Dagger = "Dagger",
  Bow = "Bow",
  Crossbow = "Crossbow",
  Source = "Source",
  None = "None",
  Magic = "Magic"
}

export interface ICharacter {
  id: string;
  name: string;
  description: string;
  xp: number;
  hp: number;
  ap: number;
  race: string;
  skills: ICharacterSkill[];
  weapons: ICharacterWeapon[];
  script: string;
  items: ILoot[];
  money: number;
}

export interface ICharacterSkill {
  id: string;
  type: SkillTypes;
  weaponType: WeaponTypes;
  name: string;
  description: string;
  level: number;
  notes: string;
}

export interface ICharacterWeapon {
  id: string;
  name: string;
  description: string;
  dmg: string;
  speed: number;
  notes: string;
}

export interface ISkill {
  id: string;
  type: SkillTypes;
  weaponType: WeaponTypes;
  name: string;
  description: string;
}

export interface IWeapon {
  id: string;
  type: WeaponTypes;
  name: string;
  description: string;
  dmg: string;
  speed: number;
}

export interface IItem {
  name: string;
  description: string;
  price: number;
}

export interface IOpponent {
  name: string;
  dmg: string;
  hp: number;
  money: string;
  items: ILoot[];
  numberOfItems: number;
}

export interface ILog {
  entries: ILogEntry[];
  victorious: boolean;
  money: number;
  loot: ILoot[];
  party: ICharacter[];
  opponents: IOpponent[];
}

export interface ILogEntry {
  info: string;
}

export type ILoot = IItem | IWeapon;
