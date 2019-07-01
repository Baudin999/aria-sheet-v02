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
import { ResistancesDetails } from "./ResistancesDetails";

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
          <div style={{ columns: "2", columnGap: "2rem" }}>
            <div style={{ breakInside: "avoid-column" }}>
              <h2>Statistic Details</h2>
              <StatDetails character={character} />
              <h2>Feat Details</h2>
              <FeatDetails character={character} />
            </div>
            <div>
              <h2>Weapons Details</h2>
              <WeaponsDetails character={character} />
            </div>
          </div>
          <h2>Resistances</h2>
          <ResistancesDetails character={character} />
        </Content>
        <Content className="fixed" style={{ padding: "2rem" }}>
          <h2>Skill Details</h2>
          <SkillDetails character={character} />
          <dl className="row">
            <dt className="col-sm-2">Bought</dt>
            <dd className="col-sm-10">Roll goed from 1d10 to 1d20</dd>
            <dt className="col-sm-2">Skilled</dt>
            <dd className="col-sm-10">Get the statistic as a bonus</dd>
            <dt className="col-sm-2">Professional</dt>
            <dd className="col-sm-10">Get your level as a bonus</dd>
            <dt className="col-sm-2">Expert</dt>
            <dd className="col-sm-10">Get Expertise as a bonus</dd>
          </dl>
        </Content>
      </div>
    );
  }
}

export const CharacterDetails = connect(s => s)(_CharacterDetails);
