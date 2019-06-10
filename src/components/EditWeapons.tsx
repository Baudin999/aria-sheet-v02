import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { calculateCharacter } from "../services/calculateCharacter";
import { saveCharacter } from "../redux/actions";
import { weapons } from "../forms/data.weapons";

class _EditWeapons extends React.Component<any, any> {
  state = { character: null, selectedWeapon: null };
  componentDidMount = () => {
    let character;
    if (this.props.selectedCharacter) {
      character = this.props.selectedCharacter;
    } else {
      let characterName = this.props.match.params.name;
      character = this.props.characters.find(c => c.name === characterName);
    }
    this.setState({
      character: JSON.parse(JSON.stringify(character))
    });
  };

  selectWeapon = weapon => {
    this.setState({
      ...this.state,
      selectedWeapon: weapon
    });
  };

  changeTextField = label => e => {
    if (!this.state.selectedWeapon) return;
    this.state.selectedWeapon[label] = e.target.value;
  };
  changeNumberField = label => e => {
    if (!this.state.selectedWeapon) return;
    this.state.selectedWeapon[label] = +e.target.value;
  };
  changeBooleanField = label => e => {
    if (!this.state.selectedWeapon) return;
    this.state.selectedWeapon[label] = e.target.checked;
  };

  render() {
    if (!this.state.character) return null;
    let { character, selectedWeapon } = this.state;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <StackPanel>
          <div className="master">
            <ul>
              {character.weapons.map(weapon => (
                <li key={weapon.id} onClick={() => this.selectWeapon(weapon)}>
                  {weapon.title} - {weapon.description}
                </li>
              ))}
            </ul>
          </div>
          {selectedWeapon && (
            <div className="details">
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
                  {selectedWeapon.bonusses.map((bonus, i) => {
                    return (
                      <div key={i}>
                        <SelectBonusItem character={character} />
                        <input type="number" />
                        <hr />
                      </div>
                    );
                  })}
                </fieldset>
              </form>
            </div>
          )}
        </StackPanel>
      </Content>
    );
  }
}

const SelectBonusItem = ({ character }) => (
  <select>
    <option />
    <optgroup label="Feats">
      {Object.keys(character.feats).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
    <optgroup label="Skills">
      {Object.keys(character.skills).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
    <optgroup label="Resistances">
      {Object.keys(character.resistances).map(i => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
  </select>
);

export const EditWeapons = connect(s => s)(_EditWeapons);

{
  /* 
<div>
            <ul>
              {Object.keys(character.feats).map((key, index) => {
                let feat = character.feats[key];
                return (
                  <li key={feat.title} onClick={() => this.selectFeat(feat)}>
                    {feat.title}
                  </li>
                );
              })}
            </ul>
          </div>
          {selectedFeat && (
            <Form
              schema={editFeat}
              uiSchema={editFeatUiSchema}
              onSubmit={this.submit}
              formData={selectedFeat}
            />
          )}
        </StackPanel> 
        <Form
            schema={editFeat}
            uiSchema={editFeatUiSchema}
            onSubmit={this.submit}
            formData={Object.keys(character.feats).map(k => character.feats[k])}
          />
          */
}
