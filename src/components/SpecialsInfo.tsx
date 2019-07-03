import * as React from "react";
import { CharacterContext } from "../services/characterContext";

export const SpecialsInfo = () => {
  let { character } = React.useContext(CharacterContext);
  if (!character) return null;
  let Details = () => (
    <tbody>
      {(character.specials || []).map(special => {
        return (
          <tr key={special.id}>
            <td>{special.title}</td>
            <td style={{ textAlign: "center" }}>{special.xp + (special.xpValue || 0)}</td>
            <td style={{ textAlign: "right" }}>{special.description}</td>
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
          <td style={{ textAlign: "center" }}>XP</td>
          <th style={{ textAlign: "right" }}>Description</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
