import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions";
import { ICharacter } from "../interfaces";

const $Link = ({ path, text, currentPath = window.location.pathname }) => {
  return (
    <li className={"nav-item" + path === currentPath ? " active" : ""}>
      <Link className="nav-link" to={path}>
        {text}
      </Link>
    </li>
  );
};

export class Nav extends React.Component<INavProps> {
  render() {
    let { email, selectedCharacter } = this.props;
    let path = window.location.pathname;
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Aria
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <$Link path="/" currentPath={path} text="Status" /> */}
            <$Link path="/characters" currentPath={path} text="Characters" />
            {selectedCharacter
              ? [
                  <$Link
                    key="details"
                    path={`/character/${selectedCharacter.name}`}
                    currentPath={path}
                    text={selectedCharacter.name}
                  />,
                  <$Link
                    key="skills"
                    path={`/character/${selectedCharacter.name}/skills`}
                    currentPath={path}
                    text="Skills"
                  />,
                  <$Link
                    key="feats"
                    path={`/character/${selectedCharacter.name}/feats`}
                    currentPath={path}
                    text="Feats"
                  />,
                  <$Link
                    key="resistances"
                    path={`/character/${selectedCharacter.name}/resistances`}
                    currentPath={path}
                    text="Resistances"
                  />,
                  <$Link
                    key="weapons"
                    path={`/character/${selectedCharacter.name}/weapons`}
                    currentPath={path}
                    text="Weapons"
                  />,
                  <$Link
                    key="gear"
                    path={`/character/${selectedCharacter.name}/gear`}
                    currentPath={path}
                    text="Gear"
                  />,
                  <$Link
                    key="specials"
                    path={`/character/${selectedCharacter.name}/specials`}
                    currentPath={path}
                    text="Specials"
                  />,
                  <$Link
                    key="spells"
                    path={`/character/${selectedCharacter.name}/spells`}
                    currentPath={path}
                    text="Spells"
                  />,
                  <$Link
                    key="export"
                    path={`/character/${selectedCharacter.name}/export`}
                    currentPath={path}
                    text="Export"
                  />
                ]
              : null}
            {/* <$Link path="/profile" currentPath={path} text="Profile" /> */}
          </ul>
          <span className="email navbar-text" onClick={logout}>
            {email}
          </span>
        </div>
      </nav>
    );
  }
}

interface INavProps {
  email: string;
  selectedCharacter?: ICharacter;
}
