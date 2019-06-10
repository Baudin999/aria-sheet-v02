import Form from "react-jsonschema-form";

export const editFeat = {
  name: "Edit Feats",
  type: "array",
  items: {
    type: "object",
    properties: {
      title: { type: "string", title: "Title", readonly: true },
      rank: { type: "number", title: "Rank" }
    }
  }
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

export const editFeatUiSchema = {
  "ui:options": {
    orderable: false,
    addable: false,
    removable: false
  }
};
