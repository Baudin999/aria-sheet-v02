import * as React from "react";
import { CharacterContext } from "../services/characterContext";

export const ExportCharacter = () => {
  let { character } = React.useContext(CharacterContext);

  return (
    <textarea
      style={{ height: "100%", width: "100%" }}
      defaultValue={JSON.stringify(character, null, 4)}
    />
  );
};
