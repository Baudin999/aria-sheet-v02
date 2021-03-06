import * as React from "react";

export const StatDetails = ({ character }) => {
  let Details = () => (
    <tbody>
      {Object.keys(character.stats).map(statName => {
        let stat = character.stats[statName];
        return (
          <tr key={stat.title}>
            <td>{stat.title}</td>
            <td style={{ textAlign: "center" }}>{stat.start}</td>
            <td style={{ textAlign: "center" }}>{stat.race}</td>
            <td style={{ textAlign: "center" }}>{stat.prof}</td>
            <td style={{ textAlign: "center" }}>{stat.gear}</td>
            <td style={{ textAlign: "center" }}>{stat.weapons}</td>
            <td style={{ textAlign: "center" }}>{stat.specials}</td>
            <td style={{ textAlign: "center" }}>{stat.total}</td>
            <td style={{ textAlign: "right" }}>{stat.result}</td>
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
          <th style={{ textAlign: "center" }}>Start</th>
          <th style={{ textAlign: "center" }}>Race</th>
          <th style={{ textAlign: "center" }}>Prof</th>
          <th style={{ textAlign: "center" }}>Gear</th>
          <th style={{ textAlign: "center" }}>Weap.</th>
          <th style={{ textAlign: "center" }}>Spec.</th>
          <th style={{ textAlign: "center" }}>Total</th>
          <th style={{ textAlign: "right" }}>Result</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
