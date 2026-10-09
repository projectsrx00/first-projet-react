//import logo from './logo.svg';
//import './App.css';

function App() {
  let nom = 'Ellaghmich';
  let stg = {nom:'Ellaghmich',prenom:'Rania',age:18}
  let statut;
  if (stg.age>=18) statut = 'Majeur';
  else statut = 'Mineur';
  return (
    <div>
      <p>Nom : {nom}</p>
      <p>Nom : {stg.nom}</p>
      <p>Prenom : {stg.prenom}</p>
      <p>
        Age : {stg.age>=18 ? 'Majeur' : 'Mineur'}
      </p>
      <p>Statut : {statut}</p>
    </div>
  );
}

export default App;
