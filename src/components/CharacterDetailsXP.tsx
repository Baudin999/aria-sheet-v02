import * as React from "react";

export const CharacterDetailsXP = ({ character }) => {
  let { xp } = character;

  return (
    <div className="character-xp">
      <div className="character-xp-name">{xp}</div>
      <div>XP</div>
    </div>
  );
};
