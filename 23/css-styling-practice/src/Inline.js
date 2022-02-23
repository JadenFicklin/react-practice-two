import React from "react";
import { useState } from "react";

function Inline(props) {
  const [inline, setInline] = useState(true);
  console.log(inline);
  console.log(props.message);

  const heading = {
    fontSize: "72px",
    color: "blue",
  };

  return (
    <div>
      <h1 style={inline ? { color: "blue" } : { color: "darkblue" }}>Inline</h1>
      <button onClick={() => setInline(!inline)}>click me!</button>
    </div>
  );
}

export default Inline;
