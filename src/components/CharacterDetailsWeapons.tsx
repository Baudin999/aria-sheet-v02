import * as React from "react";

const Weapon = ({ weapon }) => {
  return (
    <tr className="weapon str">
      <td className="total">
        {weapon.title}: {weapon.description}
      </td>
    </tr>
  );
};

export const CharacterWeapons = ({ character }) => {
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
          <Weapon key={index} weapon={weapons[key]} />
        ))}
      </tbody>
    </table>
  );
};
