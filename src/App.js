import React , {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { Text } from './components/Text';


class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  render(){
    const {clickButton} = this.props;
    const {inputValue} = this.state;
    return (
        <div className="App" style={{ paddingTop: '10px' }}>
          <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
          />
          <button onClick={()=>clickButton(inputValue)}>
            Click me!
          </button>
          <Text/>
        </div>  
    );
  }
}

const mapStateToProps = store => { 
  return({
  newValue: store.clickState.newValue
});
}
const mapDispatchToProps = dispatch =>{
  return(bindActionCreators({clickButton},dispatch));
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
