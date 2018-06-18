import React from "react";
import "./Bomba.scss";

const Bomba = ({ code, credits, ...rest }) => (
  <li>
    <h1>{code}</h1>
    <h2>{credits}</h2>
  </li>
);

export default Bomba;
