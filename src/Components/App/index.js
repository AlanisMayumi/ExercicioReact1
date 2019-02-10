import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro'
import 'whatwg-fetch';
import Dorama from '../../Containers/Doramas/index'
import Main from '../Main/index'

  
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">         
            TV Dorama List
        </header>
      {/* <Intro message="Annyeonghaseyo!"/> */}
      
      {/* <Dorama /> */}
      <Main />
      </div>
    );
  }
}

export default App;
