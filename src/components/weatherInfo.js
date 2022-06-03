import React from 'react';

const WeatherInfo = props => {
    return (

        <div>

            {
                props.error &&
                    <div className="alert alert-danger">
                        <p>{props.error}</p>
                    </div>
            }
            {
                props.temperature ?
                <div className='card card-body'>
            <h3>Clima en  {props.city}, {props.country}</h3>
            <h4>Temperatura: {props.temperature}</h4>
            <h4>Descripcion: {props.description}</h4>
            <h4>Humedad: {props.himidity}</h4>
            <h4>Velocidad del viento: {props.wind_speed}</h4>
        </div>
                :
                <div className='card card-body'>
                    <h3>NO HAY NINGUNA SOLICITUD REQUERIDA</h3>
                </div>
            }



            
        </div>

        
    );
}

export default WeatherInfo;