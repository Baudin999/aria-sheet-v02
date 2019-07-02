import * as React from "react";
import { SelectBonusItem, Bonusses } from "./SelectBonus";

export class SpecialDetails extends React.Component<any, any> {
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
    let { changeSpecial, special } = this.props;
    special[field] = value;

    if (value && value.length > 0) {
      changeSpecial(special);
    }
  };

  changeVal = (title, val) => {
    let { changeSpecial, special } = this.props;
    special[title] = val;

    if (val) {
      changeSpecial(special);
    }
  };

  changeBoolean = (title, checked) => {
    let { changeSpecial, special } = this.props;
    special[title] = checked;
    changeSpecial(special);
  };

  addBonus = () => {
    let { changeSpecial, special } = this.props;
    if (!this.state.bonus || this.state.bonus === "") {
      this.setState({
        ...this.state,
        message: `Please select a bonus item before adding the bonus.`
      });
    } else if (special[this.state.bonus]) {
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
      special[this.state.bonus] = this.state.value;
      changeSpecial(special);
      this.setState({
        bonus: "",
        value: 0
      });
    }
  };

  deleteBonus = bonus => {
    let { changeSpecial, special } = this.props;
    delete special[bonus];
    changeSpecial(special);
  };

  render() {
    let { character, special } = this.props;
    if (!special) return null;
    return (
      <div style={{ width: "700px" }}>
        <div style={{ columns: 2 }}>
          <div className="form-group">
            <label>Special title: </label>
            <input
              className="form-control"
              value={special.title}
              onChange={e => this.changeText("title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>XP value of special: </label>
            <input
              className="form-control"
              type="number"
              value={special.xpValue || 0}
              onChange={e => this.changeVal("xpValue", +e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Is Active: </label>
            <input
              className="form-control"
              type="checkbox"
              checked={!!special.active}
              onChange={e => this.changeBoolean("active", e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label>Rank: </label>
            <input
              className="form-control"
              type="number"
              value={special.rank || 0}
              onChange={e => this.changeVal("rank", +e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              style={{ height: "300px" }}
              className="form-control"
              value={special.notes || ""}
              onChange={e => this.changeText("notes", e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>Special Bonusses</h2>
          <Bonusses item={special} deleteBonus={this.deleteBonus} />
        </div>
        {this.state.message && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <div style={{ marginTop: "2rem" }}>
          <h2>Add Special Bonus</h2>
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
