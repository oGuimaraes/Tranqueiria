import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { changePPADJ , changePPMAT , changePPOBJ ,changePPCAT , changePPCOR } from '../actions/index'

const mapStateToProps = state => {
  return { 
    productPageAdjIgual:state.productPageAdjIgual,
    productPageMatIgual:state.productPageMatIgual,
    productPageObjIgual:state.productPageObjIgual,
    productPageCorIgual:state.productPageCorIgual,
    productPageCatIgual:state.productPageCatIgual };
};
const mapDispatchToProps = (dispatch) =>({
  changePPADJ: (p) => dispatch(changePPADJ(p)),
  changePPMAT: (p) => dispatch(changePPMAT(p)),
  changePPOBJ: (p) => dispatch(changePPOBJ(p)),
  changePPCOR: (p) => dispatch(changePPCOR(p)),
  changePPCAT: (p) => dispatch(changePPCAT(p)),
});
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
    this.props.changePPADJ(!this.props.productPageAdjIgual)
  }
  handleChangeMat(){
    this.props.changePPMAT(!this.props.productPageMatIgual)
  }
  handleChangeObj(){
    this.props.changePPOBJ(!this.props.productPageObjIgual)
  }
  handleChangeCor(){
    this.props.changePPCOR(!this.props.productPageCorIgual)
  }
  handleChangeCat(){
    this.props.changePPCAT(!this.props.productPageCatIgual)
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
              checked={this.state.productPageAdjIgual}
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
              checked={this.state.productPageMatIgual}
              onChange={this.handleChangeMat.bind(this)}
            ></input>
            <label class="form-check-label" for="material">
              Material igual
            </label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" checked={this.state.productPageObjIgual} onChange={this.handleChangeObj.bind(this)}></input>
            <label class="form-check-label" for="object">
              Objeto igual
            </label>
          </div>
          <h3>Cor</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" checked={this.state.productPageCorIgual} onChange={this.handleChangeCor.bind(this)}></input>
            <label class="form-check-label" for="object">
              Cor igual
            </label>
          </div>
          <h3>Categoria</h3>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="object" checked={this.state.productPageCatIgual} onChange={this.handleChangeCat.bind(this)}></input>
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

export default connect(mapStateToProps,mapDispatchToProps)(Admin);
