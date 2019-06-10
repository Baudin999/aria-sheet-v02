import * as React from "react";

export const CharacterDetailsRace = ({ character }) => {
  let { race } = character;

  return (
    <div className="character-race">
      <div className="character-race-name">{race.name}</div>
      <div>RACE</div>
    </div>
  );
};
