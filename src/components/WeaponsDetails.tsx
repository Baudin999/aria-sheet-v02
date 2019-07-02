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
    "type",
    "notes"
  ];
  let Details = () => (
    <tbody>
      {Object.keys(character.weapons).map(weaponName => {
        let weapon = character.weapons[weaponName];
        return (
          <tr key={weapon.id}>
            <td>{weapon.title}</td>
            <td>{weapon.stat}</td>
            <td>
              {Object.keys(weapon)
                .filter(key => invalidKeys.indexOf(key) === -1)
                .map(key => (
                  <span
                    key={key}
                    style={{ whiteSpace: "nowrap", display: "inline-block", marginRight: "5px" }}>
                    {key}:{weapon[key]}
                  </span>
                ))}
              <div>
                DMG: {weapon.numberOfDice}d{weapon.diceSides}+{weapon.constant} + Stat:
                {character.stats[weapon.stat].result} + DMG:{character.feats.DMG.description}
              </div>
            </td>
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
          <th>Stat</th>
          <th>Bonusses</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
