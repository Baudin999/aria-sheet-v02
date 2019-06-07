import { Events } from "./actions";
import { ICharacter } from "../interfaces";

let defaultState: IState = {};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      if (!action.payload) debugger;
      return {
        ...state,
        user: action.payload
      };
    case "USER_LOGGED_OUT":
      return { ...defaultState };
    case "CHARACTERS_GOTTEN":
      return {
        ...state,
        characters: action.payload
      };
    case "CHARACTER_CREATED":
      return {
        ...state,
        characters: [...(state.characters || []), action.payload]
      };
    case "CHARACTER_DELETED":
      return {
        ...state,
        characters: (state.characters || []).filter(c => c.name !== action.payload.name)
      };
    case "CHARACTER_SELECTED":
      return {
        ...state,
        selectedCharacter: (state.characters || []).find(c => c.name === action.payload)
      };
    default:
      return state;
  }
};

export interface IState {
  user?: IUser;
  characters?: ICharacter[];
  selectedCharacter?: ICharacter;
}

export interface IUser {
  email: string;
  uid: string;
}
