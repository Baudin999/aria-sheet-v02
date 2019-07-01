import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";

// detail screens
import { CharacterStatistics } from "./CharacterDetailsStats";
import { CharacterSkills } from "./CharacterDetailsSkills";
import { CharacterFeats } from "./CharacterDetailsFeats";
import { CharacterResistances } from "./CharacterDetailsResistances";
import { CharacterWeapons } from "./CharacterDetailsWeapons";
import { CharacterDetailsSecundaryStats } from "./CharacterDetailsSecundaryStats";
import { CharacterSpecials } from "./CharacterDetailsSpecials";
import { CharacterDetailsRace } from "./CharacterDetailsRace";
import { CharacterDetailsProfession } from "./CharacterDetailsProfession";
import { CharacterDetailsXP } from "./CharacterDetailsXP";
import { CharacterDetailsLevel } from "./CharacterDetailsLevel";
import { selectCharacter } from "../redux/actions";
import { FeatDetails } from "./FeatDetails";
import { SkillDetails } from "./SkillDetails";
import { StatDetails } from "./StatDetails";
import { WeaponsDetails } from "./WeaponsDetails";

class _CharacterDetails extends React.Component<any, any> {
  render() {
    if (!this.props.characters) return null;

    let characterName = this.props.match.params.name;
    if (!this.props.selectedCharacter || this.props.selectedCharacter.name !== characterName) {
      let character = this.props.characters.find(c => c.name === characterName);
      selectCharacter(character);
      return null;
    }

    let character = this.props.selectedCharacter;

    // if (character.name !== this.props.selectedCha)
    // selectCharacter(character);

    return (
      <div className="page">
        <Content className="fixed">
          <div className="character-name">{characterName}</div>
          <CharacterDetailsRace character={character} />
          <CharacterDetailsProfession character={character} />
          <CharacterDetailsXP character={character} />
          <CharacterDetailsLevel character={character} />

          <CharacterStatistics character={character} />
          <CharacterDetailsSecundaryStats character={character} />
          <CharacterSkills character={character} />
          <CharacterFeats character={character} />
          <CharacterResistances character={character} />
          <CharacterWeapons character={character} />
          <CharacterSpecials character={character} />
        </Content>

        <Content className="fixed">Spells and stuff</Content>

        <Content className="fixed" style={{ padding: "2rem" }}>
          <div style={{ width: "45%", float: "left" }}>
            <h2>Statistic Details</h2>
            <StatDetails character={character} />
            <h2>Feat Details</h2>
            <FeatDetails character={character} />
          </div>
          <div style={{ width: "45%", float: "right" }}>
            <h2>Weapons Details</h2>
            <WeaponsDetails character={character} />
          </div>
        </Content>
        <Content className="fixed" style={{ padding: "2rem" }}>
          <h2>Skill Details</h2>
          <SkillDetails character={character} />
        </Content>
      </div>
    );
  }
}

export const CharacterDetails = connect(s => s)(_CharacterDetails);
