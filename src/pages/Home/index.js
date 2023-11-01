import { useState } from "react";
import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';

import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState('');

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name) {
      const { avatar_url, name, bio } = newUser;
      setCurrentUser({ avatar_url, name, bio });
    }
  }

  return <div className="App">
    <Header />
    <div className="content">
      <img src={background} className="background" alt="background app" />
      <div className="info">
        <div>
          <input name="usuario" value={user} onChange={e => setUser(e.target.value)} placeholder="@username" />
          <button onClick={handleGetData} >Buscar</button>
        </div>
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/107485462?v=4" alt="Imagem do perfil" className="profile" />
          <div>
            <h3>Breno Braga</h3>
            <span>@Brenobn</span>
            <p>Descrição</p>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="repositorio">Repositórios</h4>
          <ItemList title="teste1" description="teste de descrição" />
          <ItemList title="teste1" description="teste de descrição" />
          <ItemList title="teste1" description="teste de descrição" />
        </div>
      </div>
    </div>
  </div>
}

export default App;