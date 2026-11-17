import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBudget } from "../Redux/ActionsCreators";

function BudgetForm() {
  const [budget, setBudgetInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setBudget(Number(budget)));
    setBudgetInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Saisir le budget"
        value={budget}
        onChange={(event) => setBudgetInput(event.target.value)}
        required
      />

      <button type="submit">Ajouter budget</button>
    </form>
  );
}

export default BudgetForm;