//import logo from './logo.svg';
//import './App.css';
import Stagiaire from './Stagiaire.jsx';
import Nav from './composants/nav.jsx';
import Header from './composants/header.jsx';
import NbHeures from './composants/NbHeures.jsx';
import Fillieres from './composants/fillieres.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Fillieres/>
      <Stagiaire/>
      <NbHeures/>
    </div>
  );
}

export default App;
