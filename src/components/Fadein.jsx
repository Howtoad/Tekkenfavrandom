import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function FadeIn(props) {
  const bind = useSpring({
    opacity: props.isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: props.isVisible ? 200 : 0 },
  });
  return (
    <div>
      <animated.div style={bind}>
        <div id="splash">
          <img src={props.splash}></img>
        </div>
      </animated.div>
    </div>
  );
}
