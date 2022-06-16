import './App.css';
import logotipo from './img/logotipo.png';

function App() {
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
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={}/>  
      </div>
    </div>
  );
}

export default App;
