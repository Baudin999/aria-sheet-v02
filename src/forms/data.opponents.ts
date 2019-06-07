import { IOpponent } from "../interfaces";

export const rat: IOpponent = {
  name: "Rat",
  hp: 25,
  dmg: "1d4+2",
  money: "1d4+3",
  items: [{ name: "Rat's tail", description: "A tail of the rat", price: 3 }],
  numberOfItems: 3
};
