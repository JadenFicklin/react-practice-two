import React from "react";
import "./styleSheet.css";

function Stylesheet(props) {
  console.log(props.primary);
  let className = props.primary ? "primary" : "";
  return <div className={`${className} font-xl`}>Stylesheet</div>;
}

export default Stylesheet;
