import * as React from "react";

export const Feat = ({ feat }) => {
  return (
    <tr className="feat str">
      <td className="title">{feat.title}</td>
      <td className="title">{feat.rank || 0}</td>
      <td className="total">{feat.description || "1d10 + 0"}</td>
    </tr>
  );
};

export const CharacterFeats = ({ character }) => {
  let { feats } = character;

  return (
    <table className="feats list">
      <tbody>
        {Object.keys(feats).map((key, index) => (
          <Feat key={index} feat={feats[key]} />
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td className="title" colSpan={3}>
            Feats
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
