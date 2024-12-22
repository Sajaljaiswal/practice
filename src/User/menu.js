import React from "react";

const Menu = ({ setHide }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "20px auto",
        border: "2px solid #4CAF50",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          marginBottom: "1px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={setHide(false)}
      >
        x
      </button>
      <h1 style={{ fontSize: "24px", color: "#333" }}>Sajal jaiswal</h1>
    </div>
  );
};

export default Menu;
