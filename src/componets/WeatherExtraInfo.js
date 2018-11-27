import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (

    // usuamos template strings ES6 para concatenar `` en lugar de usar + 
    <div>
        <span>
            {`${humidity}% `}
        </span>
        <span>
            {wind}
        </span>

    </div>
);

export default WeatherExtraInfo;