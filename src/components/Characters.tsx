import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters, deleteCharacter } from "../redux/actions";
import { ICharacter } from "../interfaces";
import { AddButton } from "./snippets/AddButton";

const CharacterListCard = ({ character }) => {
  return (
    <div className="card character-list-card" style={{}}>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/character/${character.name}`}>{character.name}</Link>
        </h2>
        <h3>
          {character.profession}
          {character.specialization && ` - ${character.specialization}`}
        </h3>
        <div>
          {Object.keys(character.statistics || {})
            .map(key => {
              return `${key}: ${character.statistics[key]}`;
            })
            .join(", ")}
        </div>
        <div className="remove-character" onClick={deleteCharacter(character)}>
          <i className="fas fa-minus-circle" />
        </div>
      </div>
    </div>
  );
};

class _Characters extends React.Component<any> {
  componentDidMount() {
    if (!this.props.characters) {
      getCharacters(this.props.user.uid);
    }
  }
  render() {
    if (!this.props.characters) return null;
    let { characters } = this.props;
    return (
      <div className="content">
        <div className="card-columns">
          {characters.map(c => (
            <CharacterListCard key={c.name} character={c} />
          ))}
        </div>
        <AddButton link="/characters/create" />
      </div>
    );
  }
}

export const Characters = connect((s: any) => ({
  characters: s.characters,
  user: s.user
}))(_Characters);
