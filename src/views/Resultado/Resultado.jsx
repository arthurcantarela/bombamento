import React from "react";
import "./Resultado.scss";

import { Bomba } from "components";

const Resultado = ({ bombas, ...rest }) => (
  <ul>{bombas.map((bomba, i) => <Bomba key={i} {...bomba} />)}</ul>
);

export default Resultado;
