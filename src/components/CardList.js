import React from "react";
import Card from "./Card";

const CardList = ({ robots, searchField, cardSet }) => {
  // if (true) {
  //   throw new Error("Nooo");
  // }
  //this is for test ErrorBoundry
  let CardArray = robots.filter(robot => {
    return robot.username.toLowerCase().includes(searchField.toLowerCase());
  });

  CardArray = CardArray.map(updatedCard => {
    return <Card robot={updatedCard} key={updatedCard.id} cardSet={cardSet} />;
  });

  return (
    <div>{CardArray.length === 0 ? <h1>no matched cards</h1> : CardArray}</div>
  );
};

export default CardList;
