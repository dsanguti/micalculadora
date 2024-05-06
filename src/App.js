
import './App.css';
import freCodeCampLogo from './img/freecodecamp-logo.svg';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <h4 className='titulo-logo'> FreeCodeCamp</h4>
        <img 
          src= { freCodeCampLogo }
          className='freecodecamp-logo'
          alt='logo de freeCodeCamp' />
      </div>
    </div>
  );
}

export default App;
