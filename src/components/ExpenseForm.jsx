import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../Redux/ActionsCreators";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) return;

    const expense = {
      id: crypto.randomUUID(),
      name: name.trim(),
      amount: Number(amount)
    };

    dispatch(addExpense(expense));

    setName("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la dépense"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="number"
        min="0.01"
        step="0.01"
        placeholder="Montant"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        required
      />

      <button type="submit">Ajouter dépense</button>
    </form>
  );
}

export default ExpenseForm;