import * as React from "react";
import { SelectBonusItem, Bonusses } from "./SelectBonus";
import { debounce } from "../services/helpers";

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

  changeTitle = title => {
    let { changeWeapon, weapon } = this.props;
    weapon.title = title;

    if (title && title.length > 0) {
      changeWeapon(weapon);
    }
  };

  changeNotes = notes => {
    let { changeWeapon, weapon } = this.props;
    weapon.notes = notes;
    changeWeapon(weapon);
  };

  changeType = type => {
    let { changeWeapon, weapon } = this.props;
    weapon.type = type;

    if (type && type.length > 0) {
      changeWeapon(weapon);
    }
  };

  changeVal = (title, val) => {
    let { changeWeapon, weapon } = this.props;
    weapon[title] = val;

    if (val || val === 0) {
      changeWeapon(weapon);
    }
  };

  changeBoolean = (title, checked) => {
    let { changeWeapon, weapon } = this.props;
    weapon[title] = checked;
    changeWeapon(weapon);
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
    let { character, weapon, deleteWeapon } = this.props;
    if (!weapon) return null;
    return (
      <div>
        <div style={{ width: "700px", columns: "2" }}>
          <div className="form-group">
            <label>Weapon title: </label>
            <input
              className="form-control"
              value={weapon.title}
              onChange={e => this.changeTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Weapon type:</label>
            <select
              className="form-control"
              value={weapon.type}
              onChange={e => this.changeType(e.target.value)}>
              <option value="Melee">Melee</option>
              <option value="Ranges">Ranges</option>
              <option value="Magic">Magic</option>
              <option value="Unarmed">Unarmed</option>
              <option value="Finesse">Finesse</option>
            </select>
          </div>
          <div className="form-group">
            <label>Initiative: </label>
            <input
              className="form-control"
              value={weapon.initiative}
              type="number"
              onChange={e => this.changeVal("initiative", +e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Is Active: </label>
            <input
              className="form-control"
              type="checkbox"
              checked={!!weapon.active}
              onChange={e => this.changeBoolean("active", e.target.checked)}
            />
          </div>
        </div>
        <div style={{ columns: 3 }}>
          <div className="form-group">
            <label>Number of Dice: </label>
            <input
              className="form-control"
              value={weapon.numberOfDice}
              type="number"
              onChange={e => this.changeVal("numberOfDice", +e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Dice Sides: </label>
            <input
              className="form-control"
              value={weapon.diceSides}
              type="number"
              onChange={e => this.changeVal("diceSides", +e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Constant: </label>
            <input
              className="form-control"
              value={weapon.constant}
              type="number"
              onChange={e => this.changeVal("constant", +e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              className="form-control"
              value={weapon.notes || ""}
              onChange={e => this.changeNotes(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>Weapon Bonusses</h2>
          <Bonusses item={weapon} deleteBonus={this.deleteBonus} />
        </div>
        {this.state.message && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <div style={{ marginTop: "2rem" }}>
          <h2>Add Weapon Bonus</h2>
          <div style={{ columns: 3 }}>
            <div className="form-group">
              <label>Select bonus:</label>
              <SelectBonusItem
                className="form-control"
                character={character}
                value={this.state.bonus}
                onChange={e => this.changeBonus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bonus Value:</label>
              <input
                className="form-control"
                type="number"
                min="0"
                value={this.state.value}
                onChange={e => this.changeValue(+e.target.value)}
              />
            </div>
            <div className="form-group">
              <label style={{ opacity: 0 }}>Bla</label>
              <button className="form-control btn btn-warning" onClick={this.addBonus}>
                Add Bonus
              </button>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-warning" onClick={() => deleteWeapon(weapon)}>
            Delete {weapon.title}
          </button>
        </div>
      </div>
    );
  }
}
