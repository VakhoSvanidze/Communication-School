import React from "react";
import { Badge } from "./badges";

function BottomSection() {
  return (
    <section className="container">
      <div className="block-listing">
        {[1, 2, 3, 4].map((item, i) => (
          <Badge
            className={`badge-${i + 1}`}
            content={`Category-${item}`}
            key={item}
          />
        ))}
      </div>
      <div className="banner"></div>
    </section>
  );
}

export default BottomSection;
