import {
  SET_BUDGET,
  ADD_EXPENSE,
  DELETE_EXPENSE
} from "./ActionsTypes";

export const setBudget = (budget) => ({
  type: SET_BUDGET,
  payload: budget
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id
});