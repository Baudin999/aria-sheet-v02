import * as React from "react";

export const WeaponList = ({ weapons, addWeapon, selectWeapon, selectedWeapon }) => {
  selectedWeapon = selectedWeapon || { id: -1 };
  return (
    <div className="master">
      <ul className="list-group">
        {weapons.map(weapon => (
          <li
            className={
              "stand-out-1 list-group-item" + (selectedWeapon.id === weapon.id ? " active" : "")
            }
            key={weapon.id}
            onClick={() => selectWeapon(weapon)}>
            {weapon.title} - {weapon.description} - {weapon.initiative || 10} INI
          </li>
        ))}
      </ul>
      <div className="btn-group">
        <button className="btn btn-info" type="button" onClick={addWeapon}>
          Add Weapon
        </button>
      </div>
    </div>
  );
};
