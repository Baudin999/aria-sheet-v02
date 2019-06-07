import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";

const NoCharacterSelected = () => {
  return <h1>No character selected</h1>;
};

const CharacterStatistics = ({ character }) => {
  let { stats } = character;

  return (
    <div className="statistics">
      <div className="statistic str">
        <div className="value">{stats.str.race}</div>
        <div className="total">{stats.str.race}</div>
      </div>
      <div className="statistic agi">{stats.agi.race}</div>
      <div className="statistic inu">{stats.inu.race}</div>
      <div className="statistic per">{stats.per.race}</div>
      <div className="statistic cha">{stats.cha.race}</div>
    </div>
  );
};

class _CharacterDetails extends React.Component<any, any> {
  render() {
    if (!this.props.characters) return null;

    let characterName = this.props.match.params.name;
    let character = this.props.characters.find(c => c.name === characterName);

    return (
      <Content className="fixed">
        <div className="content">
          <StackPanel>
            <CharacterStatistics character={character} />

            <pre>{JSON.stringify(character, null, 4)}</pre>
          </StackPanel>
        </div>
      </Content>
    );
  }
}

export const CharacterDetails = connect(s => s)(_CharacterDetails);
