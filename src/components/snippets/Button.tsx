import * as React from "react";
import { Link } from "react-router-dom";

const noop = () => {};

export const Button = ({
  onClick = noop,
  title = "Button",
  icon = "",
  type = "info",
  ...props
}) => {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick} {...props}>
      <i className={icon} />
      <span className="button-title">{title}</span>
    </button>
  );
};

export const SaveButton = ({ onClick = noop, ...props }) => {
  return (
    <button type="button" className="btn btn-info save-button" onClick={onClick} {...props}>
      <i className="fas fa-save" />
      <span className="button-title">Save</span>
    </button>
  );
};
