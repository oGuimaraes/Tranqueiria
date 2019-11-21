import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';
import Card from './components/Card'


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
    this.setState({products:response.data.data,loading:false})
  }
  renderCard = (product) =>{

    return(
      <Card product ={product}/>
    )
  }
  randomNumber = ()=>{
    let x = Math.ceil(Math.random()*this.state.products.length)%this.state.products.length
    return(x)
  }
  render() {
    const {loading} = this.state
      return (
        <Router>
          <div className="App">
              <Header></Header>
              <Route path="/"></Route>
              {loading ? "Segura ae" : this.renderCard(this.state.products[this.randomNumber()])}
          </div>
        </Router>
      )
  }
}

export default App;
