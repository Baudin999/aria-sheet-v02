import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SelectBonusItem = ({ character, ...props }) => (
  <select {...props}>
    <option />
    <optgroup label="Feats">
      {Object.keys(character.feats).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
    <optgroup label="Skills">
      {Object.keys(character.skills).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
    <optgroup label="Resistances">
      {Object.keys(character.resistances).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
  </select>
);

export const Bonusses = ({ item, deleteBonus }) => {
  // let invalidKeys = [
  //   // "id",
  //   // "title",
  //   // "description",
  //   // "dmg",
  //   // "numberOfDice",
  //   // "diceSides",
  //   // "constant",
  //   // "active",
  //   // "stat",
  //   // "type",
  //   // "notes",
  //   // "location"
  // ];
  let keys = Object.keys(item).filter(key => key[0] === key[0].toUpperCase());
  if (keys.length === 0) {
    return <div>No bonusses on your weapon</div>;
  }
  return (
    <div>
      {keys.map((bonus, i) => {
        return (
          <div key={bonus} className="stand-out-1 bonus-row" onClick={() => deleteBonus(bonus)}>
            <FontAwesomeIcon icon="trash-alt" style={{ marginRight: "10px" }} /> {bonus} -{" "}
            {item[bonus]}
          </div>
        );
      })}
    </div>
  );
};
