import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";

// detail screens
import { CharacterStatistics } from "./CharacterDetailsStats";
import { CharacterSkills } from "./CharacterDetailsSkills";
import { CharacterFeats } from "./CharacterDetailsFeats";
import { CharacterResistances } from "./CharacterDetailsResistances";
import { CharacterWeapons } from "./CharacterDetailsWeapons";

class _CharacterDetails extends React.Component<any, any> {
  render() {
    if (!this.props.characters) return null;

    let characterName = this.props.match.params.name;
    let character = this.props.characters.find(c => c.name === characterName);

    return (
      <Content className="fixed">
        <div className="content">
          <CharacterStatistics character={character} />
          <CharacterSkills character={character} />
          <CharacterFeats character={character} />
          <CharacterResistances character={character} />
          <CharacterWeapons character={character} />

          {/* <pre>{JSON.stringify(character, null, 4)}</pre> */}
        </div>
      </Content>
    );
  }
}

export const CharacterDetails = connect(s => s)(_CharacterDetails);
