import React, { useState } from "react";

// styles

function Letters(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const toggleHover2 = () =>
    setTimeout(() => {
      setHovered(!hovered);
    }, 700);
  return (
    <span
      className={hovered ? "animated rubberBand letters" : ""}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover2}
    >
      {props.letter}
    </span>
  );
}

export default Letters;
