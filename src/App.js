
import './App.css';
import Testimonios from './componentes/testimonios.js';

function App() {
  return (
    <div className='App'>
     <div className='contenedor-general'>
      <h1> Esto es lo que dicen nuestros alumnos de freecodecamp :</h1>
      <Testimonios
      nombre='Emy Bostian'
      pais='Suecia'
      imagen='emy'
      cargo='Ingeniera de software'
      empresa='Spotify'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      
      <Testimonios
      nombre='Luis Villanueva'
      pais='Venezuela'
      imagen='luis'
      cargo='Diseñador UX/UI'
      empresa='Mercado Libre'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />

<Testimonios
      nombre='Sora Williams'
      pais='California'
      imagen='sora'
      cargo='Diseñadora back-end'
      empresa='Apple'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />




      </div>
    </div>
  );
}

export default App;
