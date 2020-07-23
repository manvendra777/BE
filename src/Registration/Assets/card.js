import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import Cards from "./CardFront";
import Cardback from "./CardBack";
function Cardo(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      onMouseEnter={() => set((state) => !state)}
      onMouseLeave={() => set((state) => !state)}
    >
      <a.div
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        <Cards
          style={{ position: "absolute" }}
          src={props.src}
          type={props.type}
        />
      </a.div>
      <a.div
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <Cardback style={{ position: "absolute" }} info={props.info} />
      </a.div>
    </div>
  );
}

export default Cardo;
