import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Childcomponent from './childcomponent';

class App extends Component {
  constructor(){
    super();
    this.state={title:'hello world',buttonClick:val=>this.onButtonClickFn(val),childValue:'intial'};
    }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.childValue}
          </p>

          <Childcomponent data={this.state}></Childcomponent>
          <button onClick={()=>this.setState({title:'hellow'})}>click</button>

        </header>
      </div>
    );
  }

  onButtonClickFn(val){
    this.setState({childValue:val});
  }

}

export default App;
