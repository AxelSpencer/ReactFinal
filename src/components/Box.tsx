import React from "react";

const Box = ({ size = "medium", bgColor = "#ccc", children }) => {
  const sizes = {
    small: "100% 300px",
    medium: "100% 300px",
    large: "100% 300px"
  };

  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        borderRadius: "10px",
        margin: "10px",
        textAlign: "left"
      }}
    >
      {children}
    </div>
  );
};

export default Box;
