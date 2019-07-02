import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { saveCharacter, selectCharacter } from "../redux/actions";

class _EditFeats extends React.Component<any, any> {
  state = { character: this.props.selectedCharacter };

  changeRank = title => e => {
    let value = +e.target.value;
    this.state.character.feats[title].rank = value;
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
      <Content className="fixed character-create" style={{ margin: "1rem" }}>
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>

        <table className="table table-sm" style={{ maxWidth: "700px" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Rank</th>
              <th>Gear</th>
              <th>Weapons</th>
              <th>Specials</th>
              <th>XP</th>
              <th style={{ textAlign: "right" }}>Description</th>
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
                      style={{ textAlign: "center" }}
                      value={feat.rank}
                      onChange={this.changeRank(feat.title)}
                    />
                  </td>
                  <td>{feat.gear}</td>
                  <td>{feat.weapons}</td>
                  <td>{feat.specials}</td>
                  <td>{feat.xp}</td>
                  <td style={{ textAlign: "right" }}>{feat.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Content>
    );
  }
}

export const EditFeats = connect(s => s)(_EditFeats);
