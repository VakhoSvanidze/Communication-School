import React from "react";
import { Badge, Badges } from "./badges.js";
import Description from "./description.js";

function Card({ title, alt, description, badges }) {
  return (
    <div className="shopping-item">
      <h3>{title}</h3>
      <img src="https://source.unsplash.com/random/200x300" alt={alt} />
      <Description description={description} />
      <Badges badges={badges} />
      <button>Add To Cart</button>
    </div>
  );
}

export default Card;
