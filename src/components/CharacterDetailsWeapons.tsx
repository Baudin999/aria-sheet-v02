import * as React from "react";
import { CharacterContext } from "../services/characterContext";

let d = (w, character) => {
  switch (w.type) {
    case "Melee":
      return character.skills["Weapon Skill"].description;
    case "Ranged":
      return character.skills["Ballistic Skill"].description;
    case "Magic":
      return character.skills["Magic Skill"].description;
    case "Finesse":
      return character.skills["Weapon Skill"].description;
    case "Unarmed":
      return character.skills["Weapon Skill"].description;
    default:
      return character.skills["Weapon Skill"].description;
  }
};

const Weapon = ({ weapon, character }) => {
  return (
    <tr className="weapon str">
      <td className="total">
        <span style={{ fontWeight: "bold" }}>{weapon.title}:</span> {weapon.description} -{" "}
        {weapon.initiative || 10} INI; {d(weapon, character)}
      </td>
    </tr>
  );
};

export const CharacterWeapons = () => {
  let { character } = React.useContext(CharacterContext);
  let { weapons } = character;

  return (
    <table className="list">
      <thead>
        <tr>
          <th>Weapons</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(weapons).map((key, index) => (
          <Weapon key={index} weapon={weapons[key]} character={character} />
        ))}
      </tbody>
    </table>
  );
};
