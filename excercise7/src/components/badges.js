import React from "react";

function Badge({ className, content }) {
  return <span className={className}>{content}</span>;
}

function Badges({ badges }) {
  return (
    <div className="badges">
      {badges.map((badge, i) => (
        <Badge classname={`badge-${i + 1}`} content={badge} key={badge} />
      ))}
    </div>
  );
}

export { Badge, Badges };


//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