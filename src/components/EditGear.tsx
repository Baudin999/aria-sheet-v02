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

  addGear = () => {
    let newGear = {
      id: uuid(),
      title: "No Name",
      type: "Nothing"
    };
    this.setState({
      ...this.state,
      character: {
        ...this.state.character,
        gear: [...this.state.character.gear, newGear]
      },
      selectedGear: newGear
    });
  };

  render() {
    let { character, selectedGear } = this.state;
    if (!character) return null;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <StackPanel>
          <GearList gear={character.gear} addGear={this.addGear} selectGear={this.selectGear} />
          {selectedGear && (
            <GearDetails character={character} gear={selectedGear} changeGear={this.changeGear} />
          )}
        </StackPanel>
      </Content>
    );
  }
}

export const EditGears = connect(s => s)(_EditGears);
