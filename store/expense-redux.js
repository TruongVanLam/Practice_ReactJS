import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-08-21").getTime(),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2024-08-19").getTime(),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2024-07-10").getTime(),
  },
  {
    id: "e4",
    description: "A book",
    amount: 15,
    date: new Date("2024-08-10").getTime(),
  },
];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: DUMMY_EXPENSES,
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random.toString;
      state.expenses = [{ ...action.payload, id: id }, ...state.expenses];
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.data,
          };
        }
        return expense;
      });
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export const expenses = (state) => state.expenses;
export default expensesSlice.reducer;
