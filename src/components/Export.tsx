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

  function download() {
    var dataStr = "data:text/json;charset=utf-8," + characterJSON;
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", character.name + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

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
        <button className="btn btn-warning" onClick={download}>
          Download {character.name}
        </button>
      </div>
    </div>
  );
};
