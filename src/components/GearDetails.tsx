import * as React from "react";
import { SelectBonusItem, Bonusses } from "./SelectBonus";

export class GearDetails extends React.Component<any, any> {
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

  changeText = (field, value) => {
    let { changeGear, gear } = this.props;
    gear[field] = value;

    if (value && value.length > 0) {
      changeGear(gear);
    }
  };

  changeVal = (title, val) => {
    let { changeGear, gear } = this.props;
    gear[title] = val;

    if (val) {
      changeGear(gear);
    }
  };

  changeBoolean = (title, checked) => {
    let { changeGear, gear } = this.props;
    gear[title] = checked;
    changeGear(gear);
  };

  addBonus = () => {
    let { changeGear, gear } = this.props;
    if (!this.state.bonus || this.state.bonus === "") {
      this.setState({
        ...this.state,
        message: `Please select a bonus item before adding the bonus.`
      });
    } else if (gear[this.state.bonus]) {
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
      gear[this.state.bonus] = this.state.value;
      changeGear(gear);
      this.setState({
        bonus: "",
        value: 0
      });
    }
  };

  deleteBonus = bonus => {
    let { changeGear, gear } = this.props;
    delete gear[bonus];
    changeGear(gear);
  };

  render() {
    let { character, gear } = this.props;
    if (!gear) return null;
    return (
      <div>
        <div style={{ width: "700px", columns: "2" }}>
          <div className="form-group">
            <label>Gear title: </label>
            <input
              className="form-control"
              value={gear.title}
              onChange={e => this.changeText("title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gear Location:</label>
            <select
              className="form-control"
              value={gear.location}
              onChange={e => this.changeText("location", e.target.value)}>
              <option value="Head">Head</option>
              <option value="Torso">Torso</option>
              <option value="Arms">Arms</option>
              <option value="Bracers">Bracers</option>
              <option value="Gloves">Gloves</option>
              <option value="Legs">Legs</option>
              <option value="Feet">Feet</option>
              <option value="Neck">Neck</option>
              <option value="Left Finger">Left Finger</option>
              <option value="Right Finger">Right Finger</option>
              <option value="Shield">Shield</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gear Type:</label>
            <select
              className="form-control"
              value={gear.type}
              onChange={e => this.changeText("type", e.target.value)}>
              <option value="Nothing">Nothing</option>
              <option value="Cloth">Cloth</option>
              <option value="Leather">Leather</option>
              <option value="Mail">Mail</option>
              <option value="Plate">Plate</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Shield">Shield</option>
            </select>
          </div>
          <div className="form-group">
            <label>Is Active: </label>
            <input
              className="form-control"
              type="checkbox"
              checked={!!gear.active}
              onChange={e => this.changeBoolean("active", e.target.checked)}
            />
          </div>
        </div>

        <div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              className="form-control"
              value={gear.notes || ""}
              onChange={e => this.changeText("notes", e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>Gear Bonusses</h2>
          <Bonusses item={gear} deleteBonus={this.deleteBonus} />
        </div>
        {this.state.message && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <div style={{ marginTop: "2rem" }}>
          <h2>Add Gear Bonus</h2>
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
      </div>
    );
  }
}
