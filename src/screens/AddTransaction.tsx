import { TransactionForm } from "@components";
import { useTransactionMutation } from "@hooks";
import { HOME_SPACING } from "@theme";
import { Layout } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function AddTransaction({ navigation }): React.ReactElement {
  const { mutate, isLoading } = useTransactionMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: HOME_SPACING,
        paddingTop: 20,
      }}
    >
      <TransactionForm onSubmit={mutate} isLoading={isLoading} />
    </Layout>
  );
}
