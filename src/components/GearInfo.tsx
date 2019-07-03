import * as React from "react";
import { CharacterContext } from "../services/characterContext";

export const GearInfo = props => {
  let { character } = React.useContext(CharacterContext);
  if (!character) return null;

  let { gear = [] } = character;
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Bonusses</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {gear.map((g, i) => (
          <tr key={g.id || i}>
            <td>{g.title}</td>
            <td>{g.description}</td>
            <td>{g.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <h1>{character.name}</h1>;
};
