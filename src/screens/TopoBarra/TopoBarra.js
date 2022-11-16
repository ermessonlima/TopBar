import logo from '../../logo.svg';
import '../../App.css'; 
import About from '../about/about';

function TopoBarra() {
  return (
    <div className="App">
      <header className="App-header">
        <lu className="header">
          <li 
            onClick={()=> window.location.href = '/about'}
          >Inicio</li>
          <li >Sobre</li>
          <li>Contato</li>
          <li>Escreva</li>
          <li>Sair</li>
          <div className='avatar'>
            <img src={logo} className="App-logo" alt="logo" />
          </div> 
        </lu>
      </header>

      <div className='container-about'>
        <About />
      </div> 
    </div>
  );
}

export default TopoBarra;
