import React from "react";

const Card = ({ robot, cardSet }) => {
  return (
    <div className="bg-light-pink dib pa3 ma2 br3 grow bw2 shadow-5 tc w-75 w5-ns">
      <img
        src={`https://robohash.org/set_set${cardSet}/${
          robot.name
        }?size=200x200`}
        alt="robots"
      />
      <div>
        <h2>{robot.username}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
