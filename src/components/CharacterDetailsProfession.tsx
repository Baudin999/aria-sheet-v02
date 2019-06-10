import * as React from "react";

export const CharacterDetailsProfession = ({ character }) => {
  let { profession } = character;

  return (
    <div className="character-profession">
      <div className="character-profession-name">{profession.name}</div>
      <div>PROFESSION</div>
    </div>
  );
};
