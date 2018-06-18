import React from "react";
import "./Bomba.scss";

const Bomba = ({ code, credits, year, semester, grade, ...rest }) => (
  <li>
    <h1>{code}</h1>
    <h2>{credits}</h2>
    {year} - {semester} - {grade}
  </li>
);

export default Bomba;
