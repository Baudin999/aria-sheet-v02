import { dispatch, getState } from "./store";
import * as firebase from "firebase";
import { logout as fbLogout, createUserWithEmailAndPassword } from "./../services/_firebase";
import { debounce } from "../services/helpers";
import { calculateCharacter } from "../services/calculateCharacter";

export enum Events {
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_LOGGED_OUT = "USER_LOGGED_OUT",
  CHARACTERS_GOTTEN = "CHARACTERS_GOTTEN",
  CHARACTER_CREATED = "CHARACTER_CREATED",
  CHARACTER_DELETED = "CHARACTER_DELETED",
  CHARACTER_SELECTED = "CHARACTER_SELECTED"
}

export const userLoggedIn = async user => {
  let { email, uid } = user;
  await getCharacters(uid);
  dispatch({
    type: Events.USER_LOGGED_IN,
    payload: { email, uid }
  });
};

export const logout = () => {
  fbLogout().then(() => {
    dispatch({
      type: Events.USER_LOGGED_OUT
    });
    //if (window.location.href !== "/login") window.location.href = "/login";
  });
};

export const createUser = async (email, password) => {
  try {
    let user = await createUserWithEmailAndPassword(email, password);
    console.log(user);
    window.location.href = "/";
  } catch (err) {
    //if (window.location.href !== "/create-account") window.location.href = "/create-account";
  }
};

export const getCharacters = (uid: string) => {
  return firebase
    .database()
    .ref(uid)
    .once("value")
    .then(snapshot => {
      try {
        let value = snapshot.val();
        let characters = [];
        for (var key in value.characters) {
          characters.push(value.characters[key]);
        }
        dispatch({
          type: Events.CHARACTERS_GOTTEN,
          payload: characters
        });

        let params = window.location.pathname.split("/").map(k => k.replace("/", ""));
        if (params.length > 2) {
          let character = characters.find(c => c.name === params[2]);
          if (character) {
            dispatch({
              type: "CHARACTER_SELECTED",
              payload: character
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
};

export const saveCharacter = debounce(character => {
  let { user } = getState();
  if (!user) throw "Hey! quit hacking and leave this game alone!";
  return firebase
    .database()
    .ref(`${user.uid}/characters/${character.name}`)
    .set(character)
    .then(() => {
      dispatch({
        type: Events.CHARACTER_CREATED,
        payload: character
      });
    });
}, 700);

export const deleteCharacter = character => () => {
  let { user } = getState();
  if (!user) throw "Hey! quit hacking and leave this game alone!";
  return firebase
    .database()
    .ref(`${user.uid}/characters/${character.name}`)
    .remove()
    .then(() => {
      dispatch({
        type: Events.CHARACTER_DELETED,
        payload: character
      });
    });
};

export const selectCharacter = character => {
  calculateCharacter(character);
  dispatch({
    type: Events.CHARACTER_SELECTED,
    payload: character
  });
};
