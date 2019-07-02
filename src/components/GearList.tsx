import * as React from "react";

export const GearList = ({ gear, selectedGear, addGear, selectGear }) => {
  selectedGear = selectedGear || { id: -1 };
  return (
    <div className="master">
      <ul>
        {gear.map(($gear, i) => (
          <li
            className={"stand-out-1" + (selectedGear.id === $gear.id ? " active" : "")}
            key={$gear.id || i}
            onClick={() => selectGear($gear)}>
            {$gear.title} - {$gear.description || "No bonusses"}
          </li>
        ))}
      </ul>
      <div className="button-bar">
        <button className="btn btn-info" type="button" onClick={() => addGear("Armor")}>
          Add Armor
        </button>
        <button className="btn btn-info" type="button" onClick={() => addGear("Shield")}>
          Add Shield
        </button>
        <button className="btn btn-info" type="button" onClick={() => addGear("Jewellery")}>
          Add Jewellery
        </button>
      </div>
    </div>
  );
};
