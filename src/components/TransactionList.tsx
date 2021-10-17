import { Row } from "./Row";
import { moneyFormat } from "@shared";
import { Transaction } from "@shared/types";
import { Avatar, Icon, List, ListItem, Text } from "@ui-kitten/components";
import { format } from "date-fns";
import React, { useRef, useState, ReactElement } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
    <Row centered>
      <View style={{ width: "15%" }}>
        {item.type === "db" ? (
          <Icon
            name="trending-down-outline"
            style={{ height: 25, width: 25 }}
            fill="#f72585"
          />
        ) : (
          <Icon
            name="trending-up-outline"
            style={{ height: 25, width: 25 }}
            fill="#06d6a0"
          />
        )}
      </View>
      <View style={{ width: "65%" }}>
        <Text category="p1">{item.description}</Text>
        <Text category="c2" style={{ color: "#A3A5A9" }}>
          {format(new Date(item.dated), "MMM dd YYY")}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          category="p2"
          style={[
            { textAlign: "right", color: "#06d6a0" },
            item.type === "db" && { color: "#f72585" },
          ]}
          status="basic"
        >
          {item.type === "db" && "-"}
          {moneyFormat(item.amount, item.currency || "USD")}
        </Text>
      </View>
    </Row>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}
