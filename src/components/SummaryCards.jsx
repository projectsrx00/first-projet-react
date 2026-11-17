import { useSelector } from "react-redux";

function SummaryCards() {
  const budget = useSelector((state) => state.budget.budget);
  const expenses = useSelector((state) => state.expenses.expenses);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const balance = budget - totalExpenses;

  return (
     <div className="summary-cards">
      <div>
        <h2>💰 Budget total</h2>
        <p>{budget} DH</p>
      </div>

      <div>
        <h2>💸 Dépenses totales</h2>
        <p>{totalExpenses} DH</p>
      </div>

      <div
        style={{
          background: balance >= 0 ? "#5cf69e" : "#ef4444",
          border: balance >= 0
            ? "5px solid #29e379"
            : "5px solid #be123cff"
        }}
      >
        <h2>⚖️ Écart</h2>
        <p>{balance} DH</p>
      </div>
    </div>
  );
}

export default SummaryCards;