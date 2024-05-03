import React from "react";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

const TechCard = ({ image, name }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className=" lg:h-28 lg:w-28 h-20 w-20" src={image} alt={name} />
      <p className="text-white font-semibold text-center mt-2">{name}</p>
    </div>
  );
};

// style = {
//   width: "100px",
//   height: "100px",
//   borderRadius: "20px",
//   padding: "2px",
//   boxShadow: "#111 0 1px 3px 2px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "none",
//   position: "relative",
//   cursor: "pointer",
// };

export default TechCard;
