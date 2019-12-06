import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const mapStateToProps = state => {
  return { 
    productPageAdjIgual:false,
    productPageMatIgual:false,
    productPageObjIgual:false,
    productPageCorIgual:false,
    productPageCatIgual:false };
};

export class Admin extends Component {
  constructor(props){
    super(props)
    this.state ={
      productPageAdjIgual:false,
      productPageMatIgual:false,
      productPageObjIgual:false,
      productPageCorIgual:false,
      productPageCatIgual:false
    }
  }
  handleChangeAdj(){
    this.setState({productPageAdjIgual:!this.state.productPageAdjIgual})
  }
  handleChangeMat(){
    this.setState({productPageMatIgual:!this.state.productPageMatIgual})
  }
  handleChangeObj(){
    this.setState({productPageObjIgual:!this.state.productPageObjIgual})
  }
  handleChangeCor(){
    this.setState({productPageCorIgual:!this.state.productPageCorIgual})
  }
  handleChangeCat(){
    this.setState({productPageCatIgual:!this.state.productPageCatIgual})
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
        productPageAdjIgual:nextProps.productPageAdjIgual,
        productPageMatIgual:nextProps.productPageMatIgual,
        productPageObjIgual:nextProps.productPageObjIgual,
        productPageCorIgual:nextProps.productPageCorIgual,
        productPageCatIgual:nextProps.productPageCatIgual,
    };
}
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
              value={this.state.productPageAdjIgual}
              onChange={this.handleChangeAdj.bind(this)}
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
              value={this.state.productPageMatIgual}
              onChange={this.handleChangeMat.bind(this)}
            ></input>
            <label class="form-check-label" for="material">
              Material igual
            </label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" value={this.state.productPageObjIgual} onChange={this.handleChangeObj.bind(this)}></input>
            <label class="form-check-label" for="object">
              Objeto igual
            </label>
          </div>
          <h3>Cor</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" value={this.state.productPageCorIgual} onChange={this.handleChangeCor.bind(this)}></input>
            <label class="form-check-label" for="object">
              Cor igual
            </label>
          </div>
          <h3>Categoria</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" value={this.state.productPageCatIgual} onChange={this.handleChangeCat.bind(this)}></input>
            <label class="form-check-label" for="object">
              Categoria igual
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
