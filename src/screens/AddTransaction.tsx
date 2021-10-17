import { TransactionForm } from "@components";
import { HOME_SPACING } from "@theme";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function AddTransaction(): React.ReactElement {
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: HOME_SPACING,
        paddingTop: 20,
      }}
    >
      <TransactionForm />
    </Layout>
  );
}
