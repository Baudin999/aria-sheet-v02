import * as React from "react";

export const SpecialList = ({ specials, addSpecial, selectSpecial, selectedSpecial }) => {
  selectedSpecial = selectedSpecial || { id: -1 };
  return (
    <div className="master">
      <ul className="list-group">
        {specials.map(special => (
          <li
            className={
              "stand-out-1 list-group-item" + (selectedSpecial.id === special.id ? " active" : "")
            }
            key={special.id}
            onClick={() => selectSpecial(special)}>
            {special.title}
          </li>
        ))}
      </ul>
      <div className="btn-group">
        <button className="btn btn-info" type="button" onClick={addSpecial}>
          Add Special
        </button>
      </div>
    </div>
  );
};
