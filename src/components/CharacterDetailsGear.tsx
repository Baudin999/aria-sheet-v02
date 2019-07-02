import * as React from "react";
import { CharacterContext } from "../services/characterContext";

export const CharacterDetailsGear = () => {
  let { character } = React.useContext(CharacterContext);
  let { gear } = character;

  return (
    <table className="list">
      <thead>
        <tr>
          <th>Gear</th>
        </tr>
      </thead>
      <tbody>
        {gear.map(g => (
          <tr className="weapon str">
            <td className="total">
              {g.title}: {g.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
