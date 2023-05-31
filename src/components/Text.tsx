import React from "react";

const Text = ({ size = "medium", color = "#000", children }) => {
  const fontSizes = {
    s: "10px",
    m: "20px",
    l: "30px"
  };

  return (
    <p
      style={{
        fontSize: fontSizes[size],
        color
      }}
    >
      {children}
    </p>
  );
};

export default Text;
