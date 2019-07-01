import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SkillDetails = ({ character }) => {
  let Checked = ({ checked }) => {
    return checked ? (
      <FontAwesomeIcon color="hotpink" icon="check" />
    ) : (
      <FontAwesomeIcon icon="times" />
    );
  };
  let Details = () => (
    <tbody>
      {Object.keys(character.skills).map(skillName => {
        let skill = character.skills[skillName];
        return (
          <tr key={skillName}>
            <td>{skill.title}</td>
            <td style={{ textAlign: "center" }}>{skill.gear}</td>
            <td style={{ textAlign: "center" }}>{skill.weapons}</td>
            <td style={{ textAlign: "center" }}>{skill.specials}</td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={skill.bought} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={skill.skilled} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={skill.professional} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checked checked={skill.expert} />
            </td>
            <td style={{ textAlign: "right" }}>{skill.description}</td>
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
