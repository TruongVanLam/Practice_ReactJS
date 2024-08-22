import React from "react";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import { useSelector } from "react-redux";

import { expenses } from "../store/expense-redux";

export default function AllExpenses() {
  const _expenses = useSelector(expenses);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={_expenses.expenses} />
  );
}
