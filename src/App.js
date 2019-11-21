import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products:[]
    }
  }
  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://funil-mock.herokuapp.com/example1').then(response=>{
      console.log("to aqui")
      this.setState({products:response.data})
    })
  }
  render() {
      return (
        <Router>
          <div className="App">
              <Header></Header>
              <Route path="/a">aaaa</Route>
          </div>
        </Router>
      )
  }
}

export default App;
