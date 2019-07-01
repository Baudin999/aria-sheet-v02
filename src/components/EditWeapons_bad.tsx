import * as React from "react";
import { connect } from "react-redux";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { editWeapons, editWeaponsUiSchema } from "../forms/edit-weapons";
import Form from "react-jsonschema-form";

class _EditWeapons extends React.Component<any, any> {
  state = { character: null, selectedWeapon: null, items: [] };
  componentDidMount = () => {
    let character;
    if (this.props.selectedCharacter) {
      character = this.props.selectedCharacter;
    } else {
      let characterName = this.props.match.params.name;
      character = this.props.characters.find(c => c.name === characterName);
    }
    this.setState({
      character: JSON.parse(JSON.stringify(character)),
      items: [
        ...Object.keys(character.feats),
        ...Object.keys(character.skills),
        ...Object.keys(character.resistances)
      ]
    });
  };

  render() {
    if (!this.state.character) return null;
    let { character, items } = this.state;

    return (
      <Content className="fixed character-create">
        <div>Character Total XP: {character.xp}</div>
        <div>Character Level: {character.level}</div>
        <Form
          schema={editWeapons(items)}
          uiSchema={editWeaponsUiSchema}
          onSubmit={({ formData }) => console.log(formData)}
          formData={character.weapons}
        />
        {/* </StackPanel> */}
      </Content>
    );
  }
}

const BonusFields = () => {
  return <div>Bonus Fields!!!</div>;
};

// function ArrayFieldTemplate(props) {
//   return (
//     <div>
//       {props.items.map(element => element.children)}
//       {props.canAdd && (
//         <button type="button" onClick={props.onAddClick}>
//           Add
//         </button>
//       )}
//     </div>
//   );
// }

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
