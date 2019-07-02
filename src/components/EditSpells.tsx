import * as React from "react";
import { CharacterContext } from "../services/characterContext";
import { Content } from "./snippets/Content";
import { uuid } from "../services/helpers";
import { saveCharacter } from "../redux/actions";
import { StackPanel } from "./snippets/StackPanel";

export const EditSpells = props => {
  const [selectedSpell, updateSelectedSpell] = React.useState();
  let { character } = React.useContext(CharacterContext);
  if (!character) return null;

  const changeSelectedSpell = (field, value) => {
    let updatedSpell = {
      ...selectedSpell,
      [field]: value
    };
    updateSelectedSpell(updatedSpell);
    let newCharacter = {
      ...character,
      spells: [
        ...(character.spells || []).map(spell => {
          if (spell.id !== updatedSpell.id) return spell;
          else return updatedSpell;
        })
      ]
    };
    saveCharacter(newCharacter);
  };

  const addSpell = () => {
    let newSpell = { id: uuid(), rank: 1, title: "New Spell", description: "No description" };
    character.spells = [...(character.spells || []), newSpell];
    saveCharacter(character);
    updateSelectedSpell(newSpell);
  };

  return (
    <Content className="fixed character-create">
      <div>Character Total XP: {character.xp}</div>
      <div>Character Level: {character.level}</div>

      <StackPanel>
        <div className="master">
          <ul className="list-group">
            {(character.spells || []).map(spell => {
              return (
                <li
                  className={
                    "stand-out-1 list-group-item" +
                    (selectedSpell && selectedSpell.id === spell.id ? " active" : "")
                  }
                  onClick={() => updateSelectedSpell(spell)}
                  key={spell.id}>
                  {spell.title}: rank {spell.rank}
                </li>
              );
            })}
          </ul>
          <div className="btn-group">
            <button className="btn btn-info" type="button" onClick={addSpell}>
              Add Spell
            </button>
          </div>
        </div>

        {selectedSpell && (
          <div style={{ width: "700px" }}>
            <div className="form-group">
              <label>Title: </label>
              <input
                className="form-control"
                value={selectedSpell.title}
                onChange={e => changeSelectedSpell("title", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Rank: </label>
              <input
                className="form-control"
                value={selectedSpell.rank}
                type="number"
                onChange={e => changeSelectedSpell("rank", +e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <textarea
                className="form-control"
                style={{ height: "300px" }}
                value={selectedSpell.notes}
                onChange={e => changeSelectedSpell("notes", e.target.value)}
              />
            </div>
          </div>
        )}
      </StackPanel>
    </Content>
  );
};
