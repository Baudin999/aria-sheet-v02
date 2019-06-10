import * as React from "react";

const Statistic = ({ statistic }) => {
  return (
    <div className="statistic">
      <div className="title">{statistic.title}</div>
      <div className="value">{statistic.result}</div>
      <div className="total">{statistic.total}</div>
    </div>
  );
};

export const CharacterStatistics = ({ character }) => {
  let { stats } = character;

  return (
    <div className="statistics">
      <Statistic statistic={stats.str} />
      <Statistic statistic={stats.agi} />
      <Statistic statistic={stats.inu} />
      <Statistic statistic={stats.per} />
      <Statistic statistic={stats.cha} />
    </div>
  );
};
