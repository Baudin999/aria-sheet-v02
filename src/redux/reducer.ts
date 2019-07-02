import React from "react";
import { ICharacter } from "../interfaces";
import { CharacterContext } from "../services/characterContext";

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
      let found = false;
      let characters = (state.characters || []).map(c => {
        if (c.name === action.payload.name) {
          found = true;
          return action.payload;
        } else {
          return c;
        }
      });
      if (found) {
        return {
          ...state,
          characters,
          selectedCharacter: action.payload
        };
      } else {
        return {
          ...state,
          characters: [...(state.characters || []), action.payload],
          selectedCharacter: action.payload
        };
      }
    case "CHARACTER_DELETED":
      return {
        ...state,
        characters: (state.characters || []).filter(c => c.name !== action.payload.name)
      };
    case "CHARACTER_SELECTED":
      (CharacterContext as any)._currentValue.character = action.payload;
      // debugger;
      return {
        ...state,
        selectedCharacter: action.payload
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
