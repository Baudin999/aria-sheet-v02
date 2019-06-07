import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import { log } from "./../services/log";
import { login } from "./../services/_firebase";
import { userLoggedIn } from "../redux/actions";

import Form from "react-jsonschema-form";
import { loginSchema, loginUiSchema } from "./../forms/login";
import { connect } from "react-redux";

class $Login extends React.Component<any, IState> {
  submit = r => {
    let { email, password } = r.formData;

    login(email, password)
      .then(user => {
        log(`User ${email} successfully logged in`);
        userLoggedIn(user);
      })
      .catch(error => {
        log(error);
      });
  };

  render() {
    let { user } = this.props;
    if (user && window.location.href !== "/login" && window.location.href !== "/create-account")
      return <Redirect to="/" />;
    return (
      <div className="login">
        <Form schema={loginSchema} uiSchema={loginUiSchema} onSubmit={this.submit} />

        <Link className="nav-link" to="/create-account">
          Create Account
        </Link>
      </div>
    );
  }
}

export const Login = connect(s => s)($Login);

interface IState {
  userName: string;
  password: string;
  message?: string;
}
