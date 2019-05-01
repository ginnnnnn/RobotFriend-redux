import React from "react";
import Card from "./Card";

const CardList = ({ robots, searchField, cardSet }) => {
  const CardArray = robots.map(robot => {
    if (robot.username.toLowerCase().includes(searchField.toLowerCase())) {
      return <Card robot={robot} key={robot.id} cardSet={cardSet} />;
    } else {
      return null;
    }
  });
  return <div>{CardArray}</div>;
};

export default CardList;
