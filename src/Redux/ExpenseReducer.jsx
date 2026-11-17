import { ADD_EXPENSE, DELETE_EXPENSE } from "./ActionsTypes";

const initial_state = {
  expenses: []
};



function ExpenseReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
      case DELETE_EXPENSE:
  return {
    ...state,
    expenses: state.expenses.filter(
      (expense) => expense.id !== action.payload
    )
  };

    default:
      return state;
  }
}

export default ExpenseReducer;