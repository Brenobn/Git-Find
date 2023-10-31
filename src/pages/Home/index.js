import { Header } from "../../components/Header";
import background from '../../assets/background.png'

function App() {
  return <div className="App">
    <Header />
    <div className="content">
      <img src={background} className="background" alt="background app" />
      <div className="info">
        <div>
          <input name="usuario" placeholder="@username" />
          <button>Buscar</button>
        </div>
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/107485462?v=4" alt="Imagem do perfil" className="profile" />
          <div>
            <h3>Breno Braga</h3>
            <span>@Brenobn</span>
            <p>Descricão</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
}

export default App;