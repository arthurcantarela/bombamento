import React, { Fragment } from "react";
import "./Resultado.scss";

import { Bomba } from "components";

const Resultado = ({ bombas, redo, ...rest }) => (
  <Fragment>
    <div class="total">
      TOTAL:{" "}
      {bombas
        ? bombas.reduce((total, bomba) => total + bomba.credits, 0)
        : "NADA"}
    </div>
    {!!bombas && (
      <ul className="BombaList">
        {Object.entries(
          bombas.reduce((bombasObject, bomba) => {
            if (bombasObject[bomba.code]) {
              bombasObject[bomba.code].times += 1;
            } else {
              bombasObject[bomba.code] = {
                ...bomba,
                times: 1
              };
            }
            return bombasObject;
          }, {})
        )
          .sort(([_codeA, a], [_codeB, b]) => {
            console.log(a.times, b.times);
            if (a.times > b.times) return -1;
            return 1;
          })
          .map(([code, bomba]) => {
            return <Bomba key={code} bomba={bomba} />;
          })}
      </ul>
    )}
    <button onClick={redo}>Refazer</button>
  </Fragment>
);

export default Resultado;
