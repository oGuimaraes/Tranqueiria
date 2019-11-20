import React from 'react';
import './App.css';
import { createStore} from 'redux'

function App() {
    function timeline(state=[], action){
        return state;
    }
    const store = createStore(timeline);
  return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
          Click me!
        </button>
        <h1>teste</h1>
      </div>
  );
}

export default App;
