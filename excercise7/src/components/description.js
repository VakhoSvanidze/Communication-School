import React from "react";

function Description({ description }) {
  return (
    <div className="description">
      {description.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}

export default Description;
