import { moneyFormat } from "@shared";
import { Transaction } from "@shared/types";
import { Avatar, Icon, List, ListItem, Text } from "@ui-kitten/components";
import React, { useRef, useState, ReactElement } from "react";
import { FlatList, StyleSheet } from "react-native";

type TransactionListProps = {
  transactions: Transaction[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export function TransactionList({
  transactions,
}: TransactionListProps): React.ReactElement {
  const renderItem = ({
    item,
    index,
  }: {
    item: Transaction;
    index: number;
  }) => (
    <ListItem
      title={`${item.description}`}
      description={item.date}
      accessoryLeft={
        item.type === "db" ? (
          <Icon name="trending-down-outline" fill="#f72585" />
        ) : (
          <Icon name="trending-up-outline" fill="#06d6a0" />
        )
      }
      accessoryRight={<Text>{moneyFormat(item.amount, item.currency)}</Text>}
    />
  );

  return <List data={transactions} renderItem={renderItem} />;
}
