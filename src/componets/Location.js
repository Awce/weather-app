import React from 'react';

// Cuando el AF es una linea se usa () => (), cuando es mas de una linea se usa () => { return(...)}
const Location = ({ city }) => (
    
    // Se pasan las propiedades del un componente externo
    //const city = props.city;

    // Tecnica por Destructuring de ES6, esto queire decir que cuando tenemos una propiedad con un nombre igual a la variable la asignamos de forma directa
    //const { city } = props;

    // Otra forma de simplificar el Destructuring es agregarlo al const Location = (props) por const Location = ({ city })

    <div>
        <h1>
            {city}
        </h1>
    </div>
);

export default Location;

