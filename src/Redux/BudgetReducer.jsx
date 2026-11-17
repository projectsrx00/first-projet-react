import { SET_BUDGET } from "./ActionsTypes";

const initial_state = {
  budget: 0
};

function BudgetReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_BUDGET:
      return {
        ...state,
       budget: state.budget + action.payload
      };

    default:
      return state;
  }
}

export default BudgetReducer;