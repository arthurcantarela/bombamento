import React from "react";
import "./Integralizacao.scss";

const Integralizacao = ({ onChange, value, calculate, ...rest }) => (
  <React.Fragment>
    <div>
      <textarea {...{ onChange, value }} />
    </div>
    <button onClick={calculate}>Calcular</button>
  </React.Fragment>
);

export default Integralizacao;
