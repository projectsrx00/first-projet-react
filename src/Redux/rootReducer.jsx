import { combineReducers } from "redux";
import BudgetReducer from "./BudgetReducer";
import ExpenseReducer from "./ExpenseReducer";

const rootReducer = combineReducers({
  budget: BudgetReducer,
  expenses: ExpenseReducer
});

export default rootReducer;