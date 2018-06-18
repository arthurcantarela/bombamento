import React from "react";
import "./Bomba.scss";

const Bomba = ({ code, credits, year, semester, grade, ...rest }) => (
  <li style={{ width: "100px" }}>
    <h1>{code}</h1>
    <h2>{credits}</h2>
    {year} - {semester} - {grade}
  </li>
);

export default Bomba;
