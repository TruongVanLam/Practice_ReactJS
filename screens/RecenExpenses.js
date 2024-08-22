import React from "react";

import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";

import { expenses } from "../store/expense-redux";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";

export default function RecenExpenses() {
  const _expenses = useSelector(expenses);
  const recentExpenses = _expenses.expenses.filter((expenese) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expenese.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  );
}
