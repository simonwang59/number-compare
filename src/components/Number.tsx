import React from "react";
import { gsap } from "gsap";

type TNumber = {
  number: number;
  onClick: VoidFunction;
};

const Number = ({ number, onClick }: TNumber) => {
  const onEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, {
      color: "#043550",
      borderColor: "#043550",
      scale: 1.05,
    });
  };

  const onLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, {
      color: "#48A6D8",
      borderColor: "#48A6D8",
      scale: 1,
    });
  };

  return (
    <div
      className="number"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div>{number}</div>
    </div>
  );
};

export default Number;
