import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logotipo from './img/logotipo.png';

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

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
        <Contador numClics={5}/>
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
