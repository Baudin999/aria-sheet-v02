import * as React from "react";

export const Skill = ({ skill }) => {
  return (
    <tr className="skill str">
      <td className="title">{skill.title}</td>
      <td className="title">{skill.stat.toUpperCase()}</td>
      <td className="total">{skill.description || "1d10 + 0"}</td>
    </tr>
  );
};

export const CharacterSkills = ({ character }) => {
  let { skills } = character;

  return (
    <table className="skills list">
      <tbody>
        {Object.keys(skills).map((key, index) => (
          <Skill key={index} skill={skills[key]} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="title" colSpan={3}>
            Skills
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
