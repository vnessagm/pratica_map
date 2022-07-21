import React, { Component } from "react";

export default class App extends Component {
  state = {
    Dados: [
      {
        nome: "Anna",
        serie: "The Big Bang Theory",
        idade: 16
      },
      {
        nome: "Carlos",
        serie: "Game of Thrones",
        idade: 25
      },
      {
        nome: "Lucas",
        serie: "Gossip Girl",
        idade: 13
      },
      {
        nome: "Gabriel",
        serie: "The 100",
        idade: 34
      },
      {
        nome: "João",
        serie: "Superstore",
        idade: 20
      },
      {
        nome: "Ricardo",
        serie: "This is Us",
        idade: 40
      }
    ]
  };
  render() {
    return (
      <div className="text">
        <h1>Informações</h1>
        {this.state.Dados.map((item) => (
          <div>
            <p>
              Meu nome é {item.nome}, minha série favorita é {item.serie}, e
              minha idade é {item.idade}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
