import React from "react";

const Button = ({ bgcolor = "", color = "", onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '10px',
        backgroundColor: bgcolor,
        color: color
      }}
    >
      {children}
    </button>
  );
};

export default Button;
