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
    </div>
  );
}

export default App;
