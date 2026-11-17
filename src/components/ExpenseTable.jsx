import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../Redux/ActionsCreators";

function ExpenseTable() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>Dépense</th>
          <th>Montant</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.amount} DH</td>
            <td>
              <button
                type="button"
                onClick={() => dispatch(deleteExpense(expense.id))}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;