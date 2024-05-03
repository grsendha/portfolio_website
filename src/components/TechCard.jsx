import React from "react";

const TechCard = ({ image, name }) => {
  return (
    <>
      <div
        style={{
          borderRadius: "20px",
          padding: "2px",
          boxShadow: "#111 0 1px 3px 2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          position: "relative",
        }}
        className=" h-28 w-28"
      >
        <div
          className="border-2 border-white-100"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(0deg, #000, #272727)",

            borderRadius: "17px",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={image} alt="tech" className="w-1/2 h-1/2" />
        </div>
      </div>
      <p className="text-white  text-center mt-2">{name}</p>
    </>
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
