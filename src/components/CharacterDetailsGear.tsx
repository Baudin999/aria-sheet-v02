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
        {gear.map((g, i) => (
          <tr key={g.id || i} className="weapon str">
            <td className="total">
              <span style={{ fontWeight: "bold" }}>{g.title}:</span> {g.location}
              {"; "}
              {g.description || "No bonusses"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
