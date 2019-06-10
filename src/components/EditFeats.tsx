import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import Form from "react-jsonschema-form";
import { editFeat, editFeatUiSchema } from "../forms/edit-feat";
import { calculateCharacter } from "../services/calculateCharacter";
import { saveCharacter } from "../redux/actions";

class _EditFeats extends React.Component<any, any> {
  state = { character: null };
  componentDidMount = () => {
    let characterName = this.props.match.params.name;
    let character = this.props.characters.find(c => c.name === characterName);
    this.setState({
      character: JSON.parse(JSON.stringify(character))
    });
  };
  submit = ({ formData }) => {};

  changeRank = title => e => {
    let value = +e.target.value;
    this.state.character.feats[title].rank = value;
    this.setState({
      character: calculateCharacter(this.state.character)
    });
  };

  render() {
    if (!this.state.character) return null;
    let { character } = this.state;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <StackPanel>
          This is the Edit Feats part
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Rank</th>
                <th>Gear</th>
                <th>Weapons</th>
                <th>Specials</th>
                <th>XP</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(character.feats).map(key => {
                let feat = character.feats[key];
                return (
                  <tr key={key}>
                    <td>{feat.title}</td>
                    <td>
                      <input
                        type="number"
                        value={feat.rank}
                        onChange={this.changeRank(feat.title)}
                      />
                    </td>
                    <td>{feat.gear}</td>
                    <td>{feat.weapons}</td>
                    <td>{feat.specials}</td>
                    <td>{feat.xp}</td>
                    <td>{feat.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StackPanel>
        <button onClick={() => saveCharacter(this.state.character)}>Save</button>
      </Content>
    );
  }
}

export const EditFeats = connect(s => s)(_EditFeats);

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
