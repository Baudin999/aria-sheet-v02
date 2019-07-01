import * as React from "react";

export const WeaponList = ({ weapons, addWeapon, selectWeapon }) => {
  return (
    <div className="master">
      <ul>
        {weapons.map(weapon => (
          <li key={weapon.id} onClick={() => selectWeapon(weapon)}>
            {weapon.title} - {weapon.description}
          </li>
        ))}
      </ul>
      <div className="button-bar">
        <button type="button" onClick={addWeapon}>
          Add
        </button>
      </div>
    </div>
  );
};
