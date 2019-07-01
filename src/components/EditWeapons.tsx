import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { setCharacter, uuid } from "../services/helpers";
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
    let newWeapon = { id: uuid(), title: "Dagger" };
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

/*<div className="details">
              <form>
                <fieldset>
                  <legend>Weapon Information</legend>
                  <div className="field">
                    <label>Title</label>
                    <input value={selectedWeapon.title} onChange={this.changeTextField("title")} />
                  </div>
                  <div className="field">
                    <label>Type</label>
                    <select onChange={this.changeTextField("type")} value={selectedWeapon.type}>
                      <option value="Melee">Melee</option>
                      <option value="Ranged">Ranged</option>
                      <option value="Magic">Magic</option>
                      <option value="Fist">Fist</option>
                      <option value="Shield">Shield</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Number of Dice</label>
                    <input
                      type="number"
                      value={selectedWeapon.numberOfDice}
                      onChange={this.changeNumberField("titnumberOfDicele")}
                    />
                  </div>
                  <div className="field">
                    <label>Dice Sides</label>
                    <input
                      type="number"
                      value={selectedWeapon.diceSides}
                      onChange={this.changeNumberField("diceSides")}
                    />
                  </div>
                  <div className="field">
                    <label>Constant</label>
                    <input
                      type="number"
                      value={selectedWeapon.constant}
                      onChange={this.changeNumberField("constant")}
                    />
                  </div>
                  <div className="field">
                    <label>Active</label>
                    <input
                      type="checkbox"
                      value={selectedWeapon.active}
                      onChange={this.changeBooleanField("active")}
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Bonusses</legend>
                  <Bonusses weapon={selectedWeapon} character={character} />
                </fieldset>
              </form>
            </div>
*/
