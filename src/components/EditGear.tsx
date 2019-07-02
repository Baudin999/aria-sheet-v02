import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { setCharacter, uuid, debounce } from "../services/helpers";
import { GearDetails } from "./GearDetails";
import { GearList } from "./GearList";
import { saveCharacter } from "../redux/actions";

class _EditGears extends React.Component<any, any> {
  state = { character: null, selectedGear: null };
  componentDidMount = () => {
    setCharacter(this.props, this);
  };

  selectGear = $gear => {
    this.setState({
      ...this.state,
      selectedGear: $gear
    });
  };

  changeGear = $gear => {
    let gear = this.state.character.gear.map(w => {
      if (w.id === $gear.id) return $gear;
      else return w;
    });
    let character = calculateCharacter({ ...this.state.character, gear: gear });
    saveCharacter(character);

    this.setState({
      ...this.state,
      character,
      selectedGear: $gear
    });
  };
  deleteGear = g => {
    let newCharacter = calculateCharacter({
      ...this.state.character,
      gear: (this.state.character.gear || []).filter(w => w.id !== g.id)
    });

    this.setState({
      ...this.state,
      character: newCharacter,
      selectedGear: null
    });

    saveCharacter(newCharacter);
  };

  addGear = () => {
    let newGear = {
      id: uuid(),
      title: "No Name",
      type: "Nothing",
      notes: "No description"
    };
    let newCharacter = calculateCharacter({
      ...this.state.character,
      gear: [...(this.state.character.gear || []), newGear]
    });
    this.setState({
      ...this.state,
      character: newCharacter,
      selectedGear: newGear
    });

    saveCharacter(newCharacter);
  };

  render() {
    let { character, selectedGear } = this.state;
    if (!character) return null;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <StackPanel>
          <GearList
            gear={character.gear || []}
            selectedGear={selectedGear}
            addGear={this.addGear}
            selectGear={this.selectGear}
          />
          {selectedGear && (
            <GearDetails
              character={character}
              gear={selectedGear}
              changeGear={this.changeGear}
              deleteGear={this.deleteGear}
            />
          )}
        </StackPanel>
      </Content>
    );
  }
}

export const EditGears = connect(s => s)(_EditGears);
