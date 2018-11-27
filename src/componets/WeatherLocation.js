import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

// Componente Funcional con ArrowFunction de ES6 y codigo JSX
// Un ArrowFunction es una funcion anonima

const WeatherLocation = () => (

    // Incorporamos los componetes y enviamos propiedades
    <div>
        <Location  city={"CDMX"}/>
        <WeatherData />
    </div>
);

export default WeatherLocation;
