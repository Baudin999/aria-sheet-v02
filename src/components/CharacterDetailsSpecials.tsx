import * as React from "react";

const Special = ({ special }) => {
  return (
    <tr className="">
      <td className="">
        [{special.rank || 0}/{special.xp + (special.xpValue || 0)}xp]
        <span style={{ display: "inline-block", marginLeft: "5px", fontWeight: "bold" }}>
          {special.title}
        </span>
        : {special.notes}
      </td>
    </tr>
  );
};

export const CharacterSpecials = ({ character }) => {
  let { specials = [] } = character;

  return (
    <table className="list">
      <thead>
        <tr>
          <th>Specials</th>
        </tr>
      </thead>
      <tbody>
        {specials.map((special, index) => (
          <Special key={index} special={special} />
        ))}
      </tbody>
    </table>
  );
};
