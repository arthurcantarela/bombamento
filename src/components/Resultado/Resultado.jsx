import React from "react";
import "./Resultado.scss";

const Bomba = ({ code, credits, ...rest }) => (
  <li>
    <h1>{code}</h1>
    <h2>{credits}</h2>
  </li>
);

const Resultado = ({ bombas, ...rest }) => (
  <ul>{bombas.map((bomba, i) => <Bomba key={i} {...bomba} />)}</ul>
);

export default Resultado;
