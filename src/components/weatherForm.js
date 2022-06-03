import React from 'react';

const WeatherForm = props => {
    return (
    <div className="card card-body">
        <form onSubmit={props.getWeather} > 
        <div className="form-group">   
                <input  type="text" name='city' placeholder='Ingres el nombre de tu Ciudad' classNme="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name='country' placeholder='Ingres el nombre de tu Pais' classNme="form-control"/>
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    
     </div>


    );
};

export default WeatherForm;
