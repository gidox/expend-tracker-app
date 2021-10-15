import { TransactionForm } from "@components";
import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function Home(): React.ReactElement {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Card>
        <TransactionForm />
      </Card>
    </View>
  );
}
