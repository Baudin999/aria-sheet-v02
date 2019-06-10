import * as React from "react";

const Special = ({ special }) => {
  return (
    <tr className="weapon str">
      <td className="total">
        {special.name}: {special.description}
      </td>
    </tr>
  );
};

export const CharacterSpecials = ({ character }) => {
  let { specials = [] } = character;

  return (
    <table className="specials list">
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
