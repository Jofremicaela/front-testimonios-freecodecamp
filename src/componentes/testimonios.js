import React from 'react';
import'../hojas-de-estilo/testimonio.css';

function Testimonios(props){
    return(
        <div className='contenedor-testimonio'>
<img 
className='imagen-testimonio'
  src= {require(`../imagenes/testimonio-${props.imagen}.jpg`)}                      
 alt='Foto de Emy' /> 

 <div className='contenedor-text-testim'>
 <p className='emy-testimonio'>{props.nombre} en {props.pais}</p>
 <p className='emy-cargo'>{props.cargo} en {props.empresa}</p>
<p className='emy-texto-testimonio'>"{props.testimonio}"</p>
 
 </div>

        </div>
        );
    }
  export default Testimonios;