import * as React from "react";
import { log } from "./../services/log";
import { Link } from "react-router-dom";
//import { createUserWithEmailAndPassword } from "./../services/_firebase";
import { userLoggedIn, createUser } from "../redux/actions";

import Form from "react-jsonschema-form";
import { createAccountSchema, createAccountUiSchema } from "./../forms/createAccount";

export class CreateAccount extends React.Component<any, IState> {
  submit = async r => {
    let { email, password, passwordVerify } = r.formData;

    if (password !== passwordVerify) return null;
    await createUser(email, password);

    // createUserWithEmailAndPassword(email, password)
    //   .then(user => {
    //     userLoggedIn(user);
    //   })
    //   .catch(error => {
    //     log(error);
    //   });
  };

  render() {
    return (
      <div className="login">
        <Form
          schema={createAccountSchema}
          uiSchema={createAccountUiSchema}
          onSubmit={this.submit}
        />

        <Link className="nav-link" to="/login">
          Login
        </Link>
      </div>
    );
  }
}

interface IState {
  userName: string;
  password: string;
  message?: string;
}
