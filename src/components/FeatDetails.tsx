import * as React from "react";

export const FeatDetails = ({ character }) => {
  let Details = () => (
    <tbody>
      {Object.keys(character.feats).map(featName => {
        let feat = character.feats[featName];
        return (
          <tr key={featName}>
            <td>{feat.title}</td>
            <td style={{ textAlign: "center" }}>{feat.gear}</td>
            <td style={{ textAlign: "center" }}>{feat.weapons}</td>
            <td style={{ textAlign: "center" }}>{feat.specials}</td>
            <td style={{ textAlign: "center" }}>
              {feat.prefix}
              {feat.factor}
              {feat.postfix}
            </td>
            <td style={{ textAlign: "center" }}>{feat.totalRank}</td>
            <td style={{ textAlign: "right" }}>{feat.description}</td>
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
          <th style={{ textAlign: "center" }}>Gear</th>
          <th style={{ textAlign: "center" }}>Weapons</th>
          <th style={{ textAlign: "center" }}>Specials</th>
          <th style={{ textAlign: "center" }}>Factor</th>
          <th style={{ textAlign: "center" }}>Total Rank</th>
          <th style={{ textAlign: "right" }}>Description</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
