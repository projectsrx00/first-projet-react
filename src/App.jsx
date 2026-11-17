<<<<<<< HEAD
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
=======
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import BudgetForm from "./components/BudgetForm";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
function App() {
  return (
  <div className="container">
    <Header />
    <SummaryCards />
    <BudgetForm />
    <ExpenseForm />
    <ExpenseTable />
  </div>
);
}

export default App;
>>>>>>> secondrepo/TP8
