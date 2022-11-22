import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = React.useState('');
  const [res, setRes] = React.useState(null);
  const checkcstate = ()=>{
    console.log('vkn date ',data);
    console.log('vkn res ',res);
  }
  return (
    <div className="App">
      <h1 data-testid="div-click" onClick={checkcstate}></h1>
    </div>
  );
}

export default App;
