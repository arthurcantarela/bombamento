import React, { Component } from "react";
import "./App.scss";

import { Home, Integralizacao, Resultado } from "views";
import { Background } from "components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      bombas: null,
      integralizacao: ""
    };
    ["updateIntegralizacao", "calculate"].forEach(
      f => (this[f] = this[f].bind(this))
    );
  }

  updateIntegralizacao = e => this.setState({ integralizacao: e.target.value });

  calculate = () => {
    const integralizacao = this.state.integralizacao;
    let bombas = integralizacao.match(
      /[A-Z\s]{2}\d{3}\s[A-Z\d\s]\s*\d{2}\s[\s+*X!&?]\s*\d{1,2},\d\s*\d{1,3}\s*[56]\s.{6}/g
    );
    if (bombas) {
      bombas = bombas.map(bomba => ({
        code: bomba.match(/^.{5}/)[0],
        credits: parseInt(
          bomba.replace(/^[A-Z\s]{2}\d{3}\s[A-Z]\s*(\d{2}).*$/, "$1"),
          10
        ),
        year: parseInt(bomba.match(/\d{4}$/)[0], 10),
        semester: bomba.replace(/^.*(.{2})\d{4}$/, "$1"),
        grade: parseFloat(bomba.match(/\d{1,2},\d/)[0].replace(",", "."))
      }));
    }
    this.setState({ bombas: bombas, view: "resultado" });
  };

  render = () => {
    const views = {
      home: (
        <Home
          goToIntegralizacao={() => this.setState({ view: "integralizacao" })}
        />
      ),
      integralizacao: (
        <Integralizacao
          value={this.state.integralizacao}
          onChange={this.updateIntegralizacao}
          calculate={this.calculate}
        />
      ),
      resultado: (
        <Resultado
          redo={() => this.setState({ view: "integralizacao" })}
          bombas={this.state.bombas}
        />
      )
    };
    return (
      <div className="App">
        <div className="AppBkgs">
          <div className="AppBkgWrap">
            <Background />
          </div>
          <div className="AppBkgWrap">
            <Background />
          </div>
          <div className="AppBkgWrap">
            <Background />
          </div>
        </div>
        {this.state.view && views && views[this.state.view]
          ? views[this.state.view]
          : null}
      </div>
    );
  };
}

export default App;
