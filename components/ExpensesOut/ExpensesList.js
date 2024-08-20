import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ExpnenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpnenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
