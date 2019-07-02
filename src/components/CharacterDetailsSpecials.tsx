import * as React from "react";

const Special = ({ special }) => {
  return (
    <tr className="">
      <td className="">
        {special.title}: {special.notes}
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
