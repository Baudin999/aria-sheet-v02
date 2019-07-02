import * as React from "react";
import { CharacterContext } from "../services/characterContext";

export const CharacterSpells = () => {
  let { character } = React.useContext(CharacterContext);
  let { spells = [] } = character;

  return (
    <div className="spells">
      <h2>Spells</h2>
      <hr />
      <table>
        <tbody>
          {spells.map(spell => (
            <tr key={spell.id}>
              <td style={{ verticalAlign: "top" }}>
                [{spell.rank}/{spell.xp || 0}xp]
              </td>
              <td style={{ verticalAlign: "top", fontWeight: "bold" }}>{spell.title}:</td>
              <td>{spell.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
