import React from "react";

export const Modal = ( {handleClose}) => {
  
  console.log(handleClose, "okokok")
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <button onClick={handleClose}>X</button>
      <h2>Accept offer</h2>
    </div>
  );
};
