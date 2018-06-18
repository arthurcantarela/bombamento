import React from "react";

const Home = ({ goToIntegralizacao, ...rest }) => (
  <div>
    <h1>Vamos começar?</h1>
    <button onClick={goToIntegralizacao}> SIM </button>
  </div>
);

export default Home;
