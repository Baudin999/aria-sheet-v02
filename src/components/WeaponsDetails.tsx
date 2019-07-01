import * as React from "react";

export const WeaponsDetails = ({ character }) => {
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
  let Details = () => (
    <tbody>
      {Object.keys(character.weapons).map(weaponName => {
        let weapon = character.weapons[weaponName];
        return (
          <tr key={weaponName}>
            <td>{weapon.title}</td>
            <td>
              {Object.keys(weapon)
                .filter(key => invalidKeys.indexOf(key) === -1)
                .map(key => `${key}:${weapon[key]}`)
                .join(", ")}
            </td>
            <td style={{ textAlign: "right" }}>{weapon.description}</td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Bonusses</th>
          <th style={{ textAlign: "right" }}>Description</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
