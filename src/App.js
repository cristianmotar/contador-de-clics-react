import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logotipo from './img/logotipo.png';
import { useState } from 'react'; //hook para cambiar el contador

function App() {

  const [numClics, setNumClics] = useState(0); // valor inicial del contador

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logotipo}
          alt= 'logo de Ritmosss'
          />
      </div>

      <div className='contenedor-principal'>

        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />  
          
      </div>

    </div>
  );
}

export default App;
