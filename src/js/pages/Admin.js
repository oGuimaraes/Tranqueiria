import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const mapStateToProps = state => {
  return { products: state.products };
};

export class Admin extends Component {
  render() {
    return (
      <div>
        <Card>
          <h2>Escolha de Recomendação da Product Page</h2>
          <h3>Nome semelhante</h3>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="adjective"
            ></input>
            <label class="form-check-label" for="adjective">
              Adjetivo igual
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="material"
            ></input>
            <label class="form-check-label" for="material">
              Material igual
            </label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object"></input>
            <label class="form-check-label" for="object">
              Objeto igual
            </label>
          </div>
          <h3>Cor</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object"></input>
            <label class="form-check-label" for="object">
              Cor igual
            </label>
          </div>
        </Card>
        <Card>
          <h2>Escolha de Recomendação da Cart Page</h2>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Admin);
