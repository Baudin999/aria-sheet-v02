import Form from "react-jsonschema-form";

export const loginSchema = {
    title: "Login",
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {type: "string", title: "Email", format: "email"},
      password: {type: "string", title: "Password"}
    }
  };
  
  export const loginUiSchema = {
    "password": {
        "ui:widget": "password"
      }
  };