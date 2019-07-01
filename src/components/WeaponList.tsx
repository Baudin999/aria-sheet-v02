import * as React from "react";

export const WeaponList = ({ weapons, addWeapon, selectWeapon }) => {
  return (
    <div className="master">
      <ul>
        {weapons.map(weapon => (
          <li className="stand-out-1" key={weapon.id} onClick={() => selectWeapon(weapon)}>
            {weapon.title} - {weapon.description}
          </li>
        ))}
      </ul>
      <div className="button-bar">
        <button className="btn btn-info" type="button" onClick={addWeapon}>
          Add Weapon
        </button>
      </div>
    </div>
  );
};
