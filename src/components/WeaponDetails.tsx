import * as React from "react";
import { SelectBonusItem, Bonusses } from "./SelectBonus";

export class WeaponDetails extends React.Component<any, any> {
  state: any = {
    value: 0
  };

  changeBonus = newBonus => {
    this.setState({
      ...this.state,
      bonus: newBonus
    });
  };

  changeValue = newValue => {
    this.setState({
      ...this.state,
      value: newValue
    });
  };

  addBonus = () => {
    let { changeWeapon, weapon } = this.props;
    if (!this.state.bonus || this.state.bonus === "") {
      this.setState({
        ...this.state,
        message: `Please select a bonus item before adding the bonus.`
      });
    } else if (weapon[this.state.bonus]) {
      this.setState({
        ...this.state,
        message: `Bonus "${this.state.bonus}" already exists on this item.`
      });
    } else if (!this.state.value) {
      this.setState({
        ...this.state,
        message: `Value "${this.state.value}" is not a valid bonus value.`
      });
    } else {
      weapon[this.state.bonus] = this.state.value;
      changeWeapon(weapon);
      this.setState({
        bonus: "",
        value: 0
      });
    }
  };

  deleteBonus = bonus => {
    let { changeWeapon, weapon } = this.props;
    delete weapon[bonus];
    changeWeapon(weapon);
  };

  render() {
    let { character, weapon } = this.props;
    if (!weapon) return null;
    return (
      <div>
        <div>
          <span>
            [{weapon.type}] {weapon.title} - {weapon.description}
          </span>
        </div>

        <div>
          <Bonusses item={weapon} deleteBonus={this.deleteBonus} />
        </div>
        {this.state.message && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <div>
          <SelectBonusItem
            character={character}
            value={this.state.bonus}
            onChange={e => this.changeBonus(e.target.value)}
          />
          <input
            type="number"
            min="0"
            value={this.state.value}
            onChange={e => this.changeValue(+e.target.value)}
          />
          <button onClick={this.addBonus}>Add Bonus</button>
        </div>
      </div>
    );
  }
}
