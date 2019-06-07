import * as React from "react";

export const Weapon = ({ weapon }) => {
  return (
    <tr className="weapon str">
      <td className="title">{weapon.title}</td>
      <td className="total">{weapon.description}</td>
    </tr>
  );
};

export const CharacterWeapons = ({ character }) => {
  let { weapons } = character;

  return (
    <table className="weapons">
      <tbody>
        {Object.keys(weapons).map((key, index) => (
          <Weapon key={index} weapon={weapons[key]} />
        ))}
      </tbody>
    </table>
  );
};
