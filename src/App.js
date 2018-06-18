import React, { Component } from "react";
import "./App.scss";

import { Integralizacao } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bombas: 0,
      integralizacao: `
      Registro Acadêmico: 183916         RG.: 54.681.051-2SP

Curso: 41 - Engenharia ElÃ©trica - Graduação
      Ingressou em 1S/2017 na turma 2017 por Vestibular COMVEST
      Catálogo: 2017
      Limite para integralização..: 2S/2027
      Projeção para integralização: 2S/2020
      CP : 0,1533      créditos obtidos:  40 créditos faltantes: 221
      CPF: 0,2299      créditos obtidos:  60 créditos faltantes: 201
      Coeficiente de rendimento.............: 0,5504
      Classificação do aluno na turma.......: 022 de 032
      Coeficiente rendimento padrão do aluno: -0,2515
      Coeficiente rendimento médio da turma.: 0,5965

Matrículas atuais:
EA611A  +04  EA773Q  +02  EE103H  +02  MA211%  +06  MC102X  +06

Disciplinas obrigatórias faltantes para o curso   41: (Projeção)
Período: 2S2018 BE310 02 CE304 02 CE738 04 EA006 06 EA044 04 EA869 04
                EE300 04 EE521 04 EM312 04 F 229 02 F 315 04 LA122 04 MA311 06
                MA327 04 MS211 04
Período: 1S2019 CE838 02 EA075 04 EA871 04 EA879 04 EE301 02 EE400 04
                EE410 04 EE522 02 EM423 03 EM524 04 ET520 04 ET521 02 ME323 04
Período: 2S2019 EA076 02 EA614 04 EE530 04 EE540 04 ET620 04 ET621 02
Período: 1S2020 EA616 04 EA619 02 EE531 02 EE610 04 EE640 04 EE754 04
                EE833 04 EE881 04 ET720 04
Período: 2S2020 EA721 04 EA722 02 EE641 02 EE755 02 EE882 02

Disciplinas eletivas faltantes para o curso   41:
Obter  12 crédito(s) dentre EE015 06 EE016 06 EE017 12
Obter   2 crédito(s) dentre EA900 02 GT001 03 HG023 04 HZ291 02 HZ292 02
                            HZ293 02
Obter  22 crédito(s) dentre -----   

Histórico atual:
EA772 U   04      2,5  60  5 1S2017     EM230 A   04 +    9,7  60  4 1S2017
F 128 N   04      4,9  60  5 1S2017     F 129 U   02 +    5,6  30  4 1S2017
MA111 Y   06 +    5,0  90  4 1S2017     MA141 X   04 +    5,1  60  4 1S2017
EA513 U   04 +    5,0  60  4 2S2017     EA772 A   04 +    6,3  60  4 2S2017
EM330 A   04 +    9,1  60  4 2S2017     F 128 H   04 +    6,5  60  4 2S2017
F 228 I   04 +    6,1  60  4 2S2017     MA211 T   06      1,9  90  5 2S2017
QG111 B   02 +    5,2  30  4 2S2017     QG122 C   02 +    6,7  30  4 2S2017


           Tabela explicativa dos códigos utilizados no histórico escolar: 
           --------------------------------------------------------------- 
  
  Conteúdo do histórico: LLXXX TTT DD I C NNNN HHH VV PPAAAA 
  
    LLXXX=código disciplina TTT=turma DD=número de créditos 
    I=aproveitamento para integralização C=categoria NNNN=nota final 
    HHH=carga horária VV=código de aprovação PP=período AAAA=ano 
  
   Aproveitamento para integralização: 
  
     += obrigatória   *= eletiva                X= extra-curricular 
  
   Categoria: 
  
     != especial      &= especial convalidado   ?= especial ex-officio 
  
   Código de aprovação: 
     Código  Significado                   Código  Significado 
      0    SEM INFORMACAO                   9    DISCIPLINA CANCELADA OFICIO 
      1    DISPENSADO DE CURSAR DISCIPLINA 10    DISPENSA DISCIPLINA PEDAGOGICA 
      2    PROFICIENCIA                    11    DISPENSA POR IDADE 
      3    APROVADO POR FREQUENCIA         12    DISPENSA POR PROLE 
      4    APROVADO POR NOTA E FREQUENCIA  13    DISPENSA POR TRABALHO 
      5    REPROVADO POR NOTA              14    DISPENSA POR DEFICIENCIA FISICA 
      6    REPROVADO POR FREQUENCIA        15    DISPENSA POR NAO OFERECIMENTO 
      7    APROVEITAMENTO DE ESTUDOS       16    PRATICA ED. FISICA SERV. MILITAR 
      8    DESISTENCIA                     20    SUFICIENTE - APROVADO 
                                           21    INSUFICIENTE - REPROVADO 
  
     Para efeito de comprimento de pré-requisitos são válidas somente disciplinas 
     com código 1,2,3,4,7,10,11,12,13,14,15,16 ou 20. 

                                A T E N Ç Ã O
                                -------------

* RetificaÃ§Ã£o de MÃ©dia Final de FreqÃ¼Ãªncia                                  
    Os pedidos de retificaÃ§Ã£o de notas e de frequÃªncia do segundo perÃ­odo Le- 
    tivo de 2017, devem ser encaminhados Ã  DAC, atÃ© o dia 19/03/2018, imprete-
    rivelmente. Consulte o Artigo  60 do  Regimento  Geral dos Cursos de Gra- 
    duaÃ§Ã£o.
      `
    };
    ["updateIntegralizacao", "calculate"].forEach(
      f => (this[f] = this[f].bind(this))
    );
  }

  updateIntegralizacao = e => this.setState({ integralizacao: e.target.value });

  calculate = () => {
    const integralizacao = this.state.integralizacao;
    const bombas = integralizacao.match(
      /[A-Z\s]{2}\d{3}\s[A-Z]\s*\d{2}\s[\s+*X!&?]\s*\d{1,2},\d\s*\d{1,3}\s*[56]\s.{6}/g
    );
    console.log(
      bombas.map(bomba => ({
        code: bomba.match(/^.{5}/)[0],
        credits: parseInt(bomba.match(/(?<=^.{10})\d{2}/)[0])
      }))
    );
    this.setState({ bombas: 1 });
  };

  render() {
    return (
      <div className="App">
        <Integralizacao
          value={this.state.integralizacao}
          onChange={this.updateIntegralizacao}
          calculate={this.calculate}
        />
        <div>Bombas: {this.state.bombas}</div>
      </div>
    );
  }
}

export default App;
