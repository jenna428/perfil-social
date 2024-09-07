import fotoPerfil from './imagens/fotoPerfil.png'
import './App.css';

function App() {
  return (
    <div className="App">
      {/*nav */}
      {/* foto */}
      {/* nome */}
      {/*router (home, contato)*/}
      {/* footer */}
      <main>
        <section>
          <img src={fotoPerfil} alt='foto-Jeniffer' className='perfil'/>
          <h1>Jeniffer Nascimento</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
