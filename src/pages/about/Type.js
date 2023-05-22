import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    className='thiago'
      options={{
        strings: [
          "THIAGO PIREZ",
          
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
