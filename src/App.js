import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './componets/WeatherLocation';

// Este es el punto de entrada a la aplicacion con un componente de Clase

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
