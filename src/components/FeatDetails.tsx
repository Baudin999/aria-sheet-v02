import * as React from "react";

export const FeatDetails = ({ character }) => {
  let feats = Object.keys(character.feats).map(featName => character.feats[featName]);
  let Details = () => (
    <tbody>
      {Object.keys(character.feats).map(featName => {
        let feat = character.feats[featName];
        return (
          <tr key={featName}>
            <td>{feat.title}</td>
            <td style={{ textAlign: "center" }}>{feat.rank}</td>
            <td style={{ textAlign: "center" }}>{feat.gear}</td>
            <td style={{ textAlign: "center" }}>{feat.weapons}</td>
            <td style={{ textAlign: "center" }}>{feat.specials}</td>
            <td style={{ textAlign: "center" }}>
              {feat.prefix}
              {feat.factor}
              {feat.postfix}
            </td>
            <td style={{ textAlign: "center" }}>{feat.totalRank}</td>
            <td style={{ textAlign: "center" }}>{feat.xp}</td>
            <td style={{ textAlign: "right" }}>{feat.description}</td>
          </tr>
        );
      })}
      <tr style={{ fontWeight: "bold" }}>
        <td>Totals</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td>{feats.reduce((acc, f) => acc + f.xp, 0)}xp</td>
        <td />
      </tr>
    </tbody>
  );

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Title</th>
          <th style={{ textAlign: "center" }}>Rank</th>
          <th style={{ textAlign: "center" }}>Gear</th>
          <th style={{ textAlign: "center" }}>Weap.</th>
          <th style={{ textAlign: "center" }}>Spec.</th>
          <th style={{ textAlign: "center" }}>Factor</th>
          <th style={{ textAlign: "center" }}>T. Rank</th>
          <th style={{ textAlign: "center" }}>XP</th>
          <th style={{ textAlign: "right" }}>.</th>
        </tr>
      </thead>
      <Details />
    </table>
  );
};
