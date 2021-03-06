import * as React from "react";

const Skill = ({ skill }) => {
  return (
    <tr className="skill str">
      <td className="title">{skill.stat.toUpperCase()}</td>
      <td className="title">{skill.title}</td>
      <td className="total">{skill.description || "1d10 + 0"}</td>
    </tr>
  );
};

export const CharacterSkills = ({ character }) => {
  let { skills } = character;

  return (
    <table className="skills list">
      <tbody>
        {Object.keys(skills)
          .map(key => skills[key])
          .sort((a, b) => b.xp - a.xp)
          .map((skill, index) => (
            <Skill key={index} skill={skill} />
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
