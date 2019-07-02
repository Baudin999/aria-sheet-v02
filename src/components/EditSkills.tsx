import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { saveCharacter, selectCharacter } from "../redux/actions";

class _EditSkills extends React.Component<any, any> {
  state = { character: this.props.selectedCharacter };

  changeRank = (title, prop) => e => {
    let value = e.target.checked;
    this.state.character.skills[title][prop] = value;
    let newCharacter = calculateCharacter(this.state.character);
    saveCharacter(newCharacter);
    this.setState({
      character: newCharacter
    });
  };

  render() {
    if (!this.state.character) return null;
    let { character } = this.state;

    return (
      <Content className="fixed character-create" style={{ padding: "1rem" }}>
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>

        <table className="table table-sm" style={{ maxWidth: "700px" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Bought</th>
              <th>Skilled</th>
              <th>Professional</th>
              <th>Expert</th>
              <th>XP</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(character.skills).map(key => {
              let skill = character.skills[key];
              return (
                <tr key={key}>
                  <td>{skill.title}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={skill.bought}
                      onChange={this.changeRank(skill.title, "bought")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={skill.skilled}
                      onChange={this.changeRank(skill.title, "skilled")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={skill.professional}
                      onChange={this.changeRank(skill.title, "professional")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={skill.expert}
                      onChange={this.changeRank(skill.title, "expert")}
                    />
                  </td>
                  <td>{skill.xp}</td>
                  <td>{skill.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Content>
    );
  }
}

export const EditSkills = connect(s => s)(_EditSkills);

{
  /* 
<div>
            <ul>
              {Object.keys(character.feats).map((key, index) => {
                let feat = character.feats[key];
                return (
                  <li key={feat.title} onClick={() => this.selectFeat(feat)}>
                    {feat.title}
                  </li>
                );
              })}
            </ul>
          </div>
          {selectedFeat && (
            <Form
              schema={editFeat}
              uiSchema={editFeatUiSchema}
              onSubmit={this.submit}
              formData={selectedFeat}
            />
          )}
        </StackPanel> 
        <Form
            schema={editFeat}
            uiSchema={editFeatUiSchema}
            onSubmit={this.submit}
            formData={Object.keys(character.feats).map(k => character.feats[k])}
          />
          */
}
