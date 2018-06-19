import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBomb from "@fortawesome/fontawesome-free-solid/faBomb";
import "./Integralizacao.scss";

const Integralizacao = ({ onChange, value, calculate, ...rest }) => (
  <React.Fragment>
    <div className="Integralizacao">
      {value ? null : (
        <h1
          className="IntegralizacaoPlaceholder"
          onClick={() => this.textarea.focus()}
        >
          Cole aqui sua integralização
        </h1>
      )}
      <div className="IntegralizacaoTextWrap">
        <textarea
          ref={textarea => (this.textarea = textarea)}
          className="IntegralizacaoText"
          spellCheck={false}
          {...{ onChange, value }}
        />
      </div>
      {value ? (
        <button className="IntegralizacaoBtn" onClick={calculate}>
          <FontAwesomeIcon icon={faBomb} />
        </button>
      ) : null}
    </div>
  </React.Fragment>
);

export default Integralizacao;
