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