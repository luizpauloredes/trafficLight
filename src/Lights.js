
import React from 'react';
import './App.css'


const lights = () => {

    var system = () => {
        console.log('semáforo iniciado')   
        document.getElementById('redLight').style.backgroundColor = 'red'       

        setTimeout(
            
            () => {
                document.getElementById('redLight').style.backgroundColor = 'gray'
                document.getElementById('yellowLight').style.backgroundColor = 'yellow'
            }, 1000
        )
        setTimeout(
            () => {
                document.getElementById('yellowLight').style.backgroundColor = 'gray'
                document.getElementById('greenLight').style.backgroundColor = 'green'
            }, 3000
        )

        setTimeout(
            () => {
                document.getElementById('greenLight').style.backgroundColor = 'gray'
                document.getElementById('redLight').style.backgroundColor = 'red'
            }, 6000
        )
    }

    var TrafficLight = 
     setInterval ( () => {
        system()
    }, 10000
    ) 

    

    return (
        <div>
            <div id="redLight" className="lights"  >
                RED
            </div>
            <div id="yellowLight" className="lights">
                YELLOW
            </div>
            <div id="greenLight" className="lights">
                GREEN
            </div>
            <button className="buttonStart" onClick={TrafficLight}>Clique para iniciar o semáforo</button>
            <button className="buttonStop">Clique para interromper</button>
        </div>
    )


};



export default lights;