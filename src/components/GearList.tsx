import * as React from "react";

export const GearList = ({ gear, addGear, selectGear }) => {
  return (
    <div className="master">
      <ul>
        {gear.map($gear => (
          <li className="stand-out-1" key={$gear.id} onClick={() => selectGear($gear)}>
            {$gear.title} - {$gear.description}
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
