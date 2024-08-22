import { configureStore } from "@reduxjs/toolkit";

import expensesReducer from "./expense-redux";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
