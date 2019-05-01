import React from "react";

const Scroll = props => {
  return (
    <div
      className="overflow-y-scroll bt bw2 b--blue"
      style={{ height: "600px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
