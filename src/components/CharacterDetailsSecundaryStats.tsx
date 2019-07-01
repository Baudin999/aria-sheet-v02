import * as React from "react";

const Statistic = ({ title, value }) => {
  return (
    <div className="statistic">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export const CharacterDetailsSecundaryStats = ({ character }) => {
  let { stats } = character;

  return (
    <div className="secundary-statistics">
      <Statistic title="HP" value={character.hp} />
      <Statistic title="Armor" value={character.armor} />
      <Statistic title="Aura" value={character.aura} />
      <Statistic title="Expertise" value={character.expertise} />
      <Statistic title="Movement" value={character.movement} />
      <Statistic title="Initiative" value={character.initiative} />
      <Statistic title="Ini Modif." value={character.initiativeModifier} />
      <Statistic title="AP" value={character.ap} />
      <Statistic title="In. Heal." value={character.inateHealing} />
    </div>
  );
};
