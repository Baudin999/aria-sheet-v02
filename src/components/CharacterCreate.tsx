import * as React from "react";

import Form from "react-jsonschema-form";
import { schema, uiSchema, transformErrors } from "./../forms/character-create";
import { Content } from "./snippets/Content";
import { StackPanel } from "./snippets/StackPanel";
import { saveCharacter } from "../redux/actions";
import { uuid } from "../services/helpers";
import { calculateCharacter } from "../services/calculateCharacter";
import { createCharacter } from "../services/createCharacter";

const CharacterCard = ({ character }) => {
  return (
    <div className="card character-card">
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
    </div>
  );
};

export class CharacterCreate extends React.Component<any, any> {
  state = {
    character: { id: uuid(), name: "", race: "Human", description: "" }
  };
  submit = r => {
    // create a new character
    let newCharacter = createCharacter(r.formData);
    newCharacter = calculateCharacter(newCharacter);

    // save the new character
    saveCharacter(newCharacter);
    setTimeout(() => {
      this.props.history.push("/characters");
    });
  };

  onChange = r => {
    this.setState({
      ...this.state,
      character: r.formData
    });
  };

  render() {
    let { character } = this.state;
    return (
      <Content className="fixed character-create" style={{ maxWidth: "500px" }}>
        <StackPanel>
          <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={character}
            onSubmit={this.submit}
            onChange={this.onChange}
            transformErrors={transformErrors}
          />
        </StackPanel>
      </Content>
    );
  }
}
