import * as React from "react";
import { CharacterContext } from "../services/characterContext";
import { saveCharacter } from "../redux/actions";
import { calculateCharacter } from "../services/calculateCharacter";

export const ExportCharacter = () => {
  const { character } = React.useContext(CharacterContext);
  if (!character) return null;
  const [characterJSON, updateCharacter] = React.useState(JSON.stringify(character, null, 4));

  const save = () => {
    try {
      let $character = JSON.parse(characterJSON);
      saveCharacter(calculateCharacter($character));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <textarea
        style={{ height: "500px", width: "500px" }}
        value={characterJSON}
        onChange={e => updateCharacter(e.target.value)}
      />
      <div>
        <button className="btn btn-warning" onClick={save}>
          Save {character.name}
        </button>
      </div>
    </div>
  );
};
