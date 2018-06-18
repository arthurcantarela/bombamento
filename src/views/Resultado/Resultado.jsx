import React, { Fragment } from "react";
import "./Resultado.scss";

import { Bomba } from "components";

const Resultado = ({ bombas, redo, ...rest }) => (
  <Fragment>
    <ul>{bombas.map((bomba, i) => <Bomba key={i} {...bomba} />)}</ul>
    <button onClick={redo}>Refazer</button>
  </Fragment>
);

export default Resultado;
