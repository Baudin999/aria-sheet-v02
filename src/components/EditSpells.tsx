import * as React from "react";
import { CharacterContext } from "../services/characterContext";
import { Content } from "./snippets/Content";

export const EditSpells = props => {
  let { character } = React.useContext(CharacterContext);
  if (!character) return null;
  return (
    <Content className="fixed character-create">
      <div>Character Total XP: {character.xp}</div>
      <div>Character Level: {character.level}</div>
    </Content>
  );
};
