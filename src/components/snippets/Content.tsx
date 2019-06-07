import * as React from "react";

export const Content = ({ children, className = "", ...props }) => {
  return (
    <div className={"content " + className} {...props}>
      {children}
    </div>
  );
};
