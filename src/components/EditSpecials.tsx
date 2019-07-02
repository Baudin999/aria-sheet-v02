import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { setCharacter, uuid, debounce } from "../services/helpers";
import { SpecialDetails } from "./SpecialDetails";
import { SpecialList } from "./SpecialList";
import { saveCharacter } from "../redux/actions";

class _EditSpecials extends React.Component<any, any> {
  state = { character: null, selectedSpecial: null };
  componentDidMount = () => {
    setCharacter(this.props, this);
  };

  selectSpecial = special => {
    console.log("Selecting Special");
    this.setState({
      ...this.state,
      selectedSpecial: special
    });
  };

  changeSpecial = special => {
    let specials = this.state.character.specials.map(w => {
      if (w.id === special.id) return special;
      else return w;
    });
    let character = calculateCharacter({ ...this.state.character, specials: specials });
    saveCharacter(character);

    this.setState({
      ...this.state,
      character,
      selectedSpecial: special
    });
  };

  addSpecial = () => {
    let newSpecial = {
      id: uuid(),
      title: "New Special",
      description: "",
      notes: "No description of the special yet."
    };
    this.setState({
      ...this.state,
      character: {
        ...this.state.character,
        specials: [...(this.state.character.specials || []), newSpecial]
      },
      selectedSpecial: newSpecial
    });
  };

  render() {
    let { character, selectedSpecial } = this.state;
    if (!character) return null;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <StackPanel>
          <SpecialList
            specials={character.specials || []}
            addSpecial={this.addSpecial}
            selectSpecial={this.selectSpecial}
            selectedSpecial={selectedSpecial}
          />
          {selectedSpecial && (
            <SpecialDetails
              character={character}
              special={selectedSpecial}
              changeSpecial={this.changeSpecial}
            />
          )}
        </StackPanel>
      </Content>
    );
  }
}

export const EditSpecials = connect(s => s)(_EditSpecials);
