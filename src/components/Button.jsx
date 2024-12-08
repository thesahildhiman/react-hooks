import React from "react";

const Button = ({ onClick, label }) => {
  console.log({ label });
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default React.memo(Button);
