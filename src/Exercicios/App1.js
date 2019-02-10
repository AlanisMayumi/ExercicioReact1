import React, { Component } from 'react';
import './App.css';
import Intro from '../Components/Intro'
import 'whatwg-fetch';

  
class App extends Component {
  state ={
    dorama: [],
  }

  componentDidMount(){
    const dorama = ["Boys Before Flowers", "Baker King Kim Tak Go"];
    setTimeout(() =>{
      this.setState({dorama: dorama});
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">         
            TV Dorama List
        </header>
      <Intro message="Annyeonghaseyo!"/>
      The length of doramas array - {this.state.dorama.length}
      </div>
    );
  }
}

export default App;
