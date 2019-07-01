import Form from "react-jsonschema-form";
import { string } from "postcss-selector-parser";
import { number } from "prop-types";

export const editWeapons = items => {
  return {
    name: "Edit Weapon",
    type: "array",
    items: {
      type: "object",
      properties: {
        title: { type: "string", title: "Title", readonly: true },
        dmg: { type: "string", title: "DMG" },
        bonusFields: {
          type: "array",
          items: { $ref: "#/definitions/weaponDetail" }
        }
      }
    },
    definitions: {
      weaponDetail: {
        type: "object",
        properties: {
          bonusProperty: {
            type: "string",
            enum: items,
            title: "Bonus Property"
          },
          value: {
            type: "number",
            title: "Value"
          }
        }
      }
    }
  };
};

// export const editFeat = {
//   name: "Edit Feat",
//   type: "object",
//   required: [],
//   properties: {
//     title: { type: "string", title: "Title" },
//     bought: { type: "boolean", title: "Bought" },
//     skilled: { type: "boolean", title: "Skilled" },
//     professional: { type: "boolean", title: "Professional" },
//     expert: { type: "boolean", title: "Expert" },
//     description: { type: "string", title: "Description" }
//   }
// };

export const editWeaponsUiSchema = {
  "ui:options": {
    orderable: false
  },
  weaponDetail: {
    bonusFields: {
      "ui:field": "bonusField",
      classNames: "bonus-field"
    }
  },
  dmg: {
    classNames: "boo"
  }
};
