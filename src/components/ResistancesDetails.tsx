import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ResistancesDetails = ({ character }) => {
  let Checked = ({ checked }) => {
    return checked ? (
      <FontAwesomeIcon color="hotpink" icon="check" />
    ) : (
      <FontAwesomeIcon icon="times" />
    );
  };
  let Details = () => (
    <tbody>
      {Object.keys(character.resistances).map(resistanceName => {
        let resistance = character.resistances[resistanceName];
        return (
          <tr key={resistanceName}>
            <td>{resistance.title}</td>
            <td>{resistance.stat}</td>
            <td style={{ textAlign: "center" }}>{resistance.gear}</td>
            <td style={{ textAlign: "center" }}>{resistance.weapons}</td>
            <td style={{ textAlign: "center" }}>{resistance.specials}</td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={resistance.bought} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={resistance.skilled} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={resistance.professional} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={resistance.expert} />
            </td>
            <td style={{ textAlign: "right" }}>{resistance.description}</td>
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
          <th style={{ textAlign: "center" }}>Gear</th>
          <th style={{ textAlign: "center" }}>Weapons</th>
          <th style={{ textAlign: "center" }}>Specials</th>
          <th style={{ textAlign: "center" }}>Bought</th>
          <th style={{ textAlign: "center" }}>Skilled</th>
          <th style={{ textAlign: "center" }}>Professional</th>
          <th style={{ textAlign: "center" }}>Expert</th>
          <th style={{ textAlign: "right" }}>Description</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
