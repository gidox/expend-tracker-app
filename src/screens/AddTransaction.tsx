import { TransactionForm } from "@components";
import { HOME_SPACING } from "@theme";
import React from "react";
import { View } from "react-native";

export default function AddTransaction(): React.ReactElement {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: HOME_SPACING,
        marginTop: 20,
      }}
    >
      <TransactionForm />
    </View>
  );
}
