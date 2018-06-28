import React from "react";
import "./Bomba.scss";

const Bomba = ({ bomba }) => (
  <li style={{ width: "100px" }}>
    <h1>{bomba.code}</h1>
    {/* <h2>{bomba.credits}</h2> */}
    {bomba.times > 1 ? "bombou " + bomba.times + " vezes" : null}
  </li>
);

export default Bomba;
