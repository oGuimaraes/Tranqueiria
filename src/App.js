import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { connect } from "react-redux";
import { setProducts } from './js/actions/index'
import Header from './js/components/Header';
import axios from 'axios';
import Card from './js/components/Card'

const mapStateToProps = state => {
  return { products: state.products};
};
const mapDispatchToProps = (dispatch) =>({
  setProducts: (products) => dispatch(setProducts(products))
});

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        products:{data:[]
      },
      loading:true
    }
    this._setState()
  }
  async _setState(){
    let response=[]
    try{
      response = await axios.get('https://cors-anywhere.herokuapp.com/https://funil-mock.herokuapp.com/example1')
    } catch(error){
      console.log("Error ",error)
    }  
    this.props.setProducts(response.data.data)
    //Passar o state de loading para a store do redux depois
    this.setState({loading:false})
  }
  renderCard = (product) =>{

    return(
      <Card product ={product}/>
    )
  }
  // Gera um numero randomico para que seja selecionado um produto aleatorio do array
  randomNumber = ()=>{
    let x = Math.ceil(Math.random()*this.props.products.length)%this.props.products.length
    return(x)
  }
  render() {
    const {loading} = this.state
      return (
        <Router>
          <div className="App">
              <Header></Header>
              <Route path="/"></Route>
              {loading ? "Segura ae" : this.renderCard(this.props.products[this.randomNumber()])}
          </div>
        </Router>
      )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
