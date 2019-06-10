import * as React from "react";

export const CharacterDetailsLevel = ({ character }) => {
  let { level } = character;

  return (
    <div className="character-level">
      <div className="character-level-name">{level}</div>
      <div>LEVEL</div>
    </div>
  );
};
