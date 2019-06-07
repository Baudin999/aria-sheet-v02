import * as React from "react";
import { Link } from "react-router-dom";

const noop = () => {};

export const AddButton = ({ link = null, onClick = noop }) => {
  if (link) {
    return (
      <Link className="add-button" to={link}>
        <div className="add-button">
          <i className="fas fa-plus-circle" />
        </div>
      </Link>
    );
  } else {
    return (
      <div className="add-button" onClick={onClick}>
        <i className="fas fa-plus-circle" />
      </div>
    );
  }
};
