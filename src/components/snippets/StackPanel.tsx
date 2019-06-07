import * as React from "react";
export const StackPanel = ({ children, className = "", ...props }) => {
  return (
    <div className={"stack-panel horizontal " + className} {...props}>
      {children}
    </div>
  );
};
