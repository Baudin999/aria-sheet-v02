import Form from "react-jsonschema-form";

export const createAccountSchema = {
  title: "Create Account",
  type: "object",
  required: ["email", "password", "passwordVerify"],
  properties: {
    email: { type: "string", title: "Email", format: "email" },
    password: { type: "string", title: "Password" },
    passwordVerify: { type: "string", title: "Password (verify)" }
  }
};

export const createAccountUiSchema = {
  password: {
    "ui:widget": "password"
  },
  passwordVerify: {
    "ui:widget": "password"
  }
};
