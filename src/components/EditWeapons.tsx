import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { setCharacter, uuid, debounce } from "../services/helpers";
import { WeaponDetails } from "./WeaponDetails";
import { WeaponList } from "./WeaponList";
import { saveCharacter } from "../redux/actions";

class _EditWeapons extends React.Component<any, any> {
  state = { character: null, selectedWeapon: null };
  componentDidMount = () => {
    setCharacter(this.props, this);
  };

  selectWeapon = weapon => {
    console.log("Selecting Weapon");
    this.setState({
      ...this.state,
      selectedWeapon: weapon
    });
  };

  changeWeapon = weapon => {
    let weapons = this.state.character.weapons.map(w => {
      if (w.id === weapon.id) return weapon;
      else return w;
    });
    let character = calculateCharacter({ ...this.state.character, weapons: weapons });
    saveCharacter(character);

    this.setState({
      ...this.state,
      character,
      selectedWeapon: weapon
    });
  };

  addWeapon = () => {
    let newWeapon = {
      id: uuid(),
      title: "Dagger",
      description: "1d4+1",
      type: "Melee",
      stat: "str"
    };
    this.setState({
      ...this.state,
      character: {
        ...this.state.character,
        weapons: [...this.state.character.weapons, newWeapon]
      },
      selectedWeapon: newWeapon
    });
  };

  render() {
    let { character, selectedWeapon } = this.state;
    if (!character) return null;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <StackPanel>
          <WeaponList
            weapons={character.weapons}
            addWeapon={this.addWeapon}
            selectWeapon={this.selectWeapon}
            selectedWeapon={selectedWeapon}
          />
          {selectedWeapon && (
            <WeaponDetails
              character={character}
              weapon={selectedWeapon}
              changeWeapon={this.changeWeapon}
            />
          )}
        </StackPanel>
      </Content>
    );
  }
}

export const EditWeapons = connect(s => s)(_EditWeapons);
