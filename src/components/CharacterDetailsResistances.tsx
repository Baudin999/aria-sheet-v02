import * as React from "react";

const Resistance = ({ resistance }) => {
  return (
    <tr className="resistance str">
      <td className="title">{resistance.stat}</td>
      <td className="title">{resistance.title}</td>
      <td className="total">{resistance.description || "1d10 + 0"}</td>
    </tr>
  );
};

export const CharacterResistances = ({ character }) => {
  let { resistances } = character;

  return (
    <table className="resistances list">
      <tbody>
        {Object.keys(resistances).map((key, index) => (
          <Resistance key={index} resistance={resistances[key]} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="title" colSpan={3}>
            Resistances
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
