import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";

export default function RecenExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}
