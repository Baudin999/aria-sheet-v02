import Form from "react-jsonschema-form";
import { transformErrors as tfe } from "./helpers";

export const transformErrors = errors => {
  return tfe(schema, errors);
};

export const schema = {
  title: "Create Character",
  type: "object",
  required: ["name", "race", "profession"],
  properties: {
    name: {
      type: "string",
      title: "Name",
      minLength: 3,
      maxLength: 25,
      messages: {
        minLength: "The name of your character should be at least 3 characters long.",
        maxLength: "The name of your character should not be longer than 25 characters."
      }
    },
    race: {
      type: "string",
      enum: ["Human", "Elf", "Dwarf", "Indir"],
      title: "Race",
      default: "Human"
    },
    profession: {
      type: "string",
      enum: [
        "Warrior",
        "Defender",
        "Barbarian",
        "Paladin",
        "Slayer",
        "Earth Mage",
        "Fire Mage",
        "Water Mage",
        "Air Mage",
        "Arcane Warrior",
        "Monk",
        "Priest",
        "Cleric",
        "Rogue",
        "Dreamer",
        "Shapeshifter"
      ],
      title: "Profession",
      default: "Warrior"
    },
    description: {
      type: "string",
      title: "Description"
    }
  }
};

export const uiSchema = {
  description: {
    "ui:widget": "textarea"
  }
};
