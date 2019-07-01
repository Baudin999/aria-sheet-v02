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
  let invalidKeys = [
    "id",
    "title",
    "description",
    "dmg",
    "numberOfDice",
    "diceSides",
    "constant",
    "active",
    "stat",
    "type"
  ];
  return (
    <div>
      {Object.keys(item)
        .filter(key => invalidKeys.indexOf(key) === -1)
        .map((bonus, i) => {
          return (
            <div key={i} className="bonus-row" onClick={() => deleteBonus(bonus)}>
              <FontAwesomeIcon icon="trash-alt" style={{ marginRight: "10px" }} /> {bonus} -{" "}
              {item[bonus]}
            </div>
          );
        })}
    </div>
  );
};
