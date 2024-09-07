import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home'
import Contato from './componentes/Contato'
import NavBar from './componentes/layout/NavBar';
import fotoPerfil from './imagens/fotoPerfil.png'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <main>
          <section>
            <img src={fotoPerfil} alt='foto-Jeniffer' className='perfil'/>
            <h1>Jeniffer Nascimento</h1>
            <Routes>
              <Route exact path= "/" element={<Home/>}/>
              <Route exact path= "/contato" element={<Contato/>}/>
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
