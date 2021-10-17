import { Row, TransactionForm, TransactionList } from "@components";
import { RootBottomParamList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { HOME_SPACING } from "@theme";
import { Icon, Text, Button, Layout } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from "react-native";

const transactionList = [
  {
    id: 1,
    description: "Electricity bill",
    amount: 40,
    currency: "USD",
    date: "2021-10-13T04:44:17.089Z",
    type: "db",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
  {
    id: 2,
    description: "Rent bill",
    amount: 400,
    date: "2021-10-15T04:44:17.089Z",
    type: "db",
    currency: "USD",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
  {
    id: 3,
    description: "Salary",
    amount: 2000,
    date: "2021-10-10T04:44:17.089Z",
    type: "cr",
    currency: "USD",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
  {
    id: 4,
    description: "Gym",
    amount: 21,
    date: "2021-10-10T04:44:17.089Z",
    type: "db",
    currency: "USD",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
  {
    id: 5,
    description: "Supermarket food",
    amount: 65,
    date: "2021-10-10T04:44:17.089Z",
    type: "db",
    currency: "USD",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
  {
    id: 6,
    description: "Restaurant",
    amount: 30,
    date: "2021-10-10T04:44:17.089Z",
    type: "db",
    currency: "USD",
    createdAt: "2021-10-17T04:44:17.089Z"
  },
]

export default function Home({ navigation }): React.ReactElement {
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: HOME_SPACING,
        paddingTop: 60,
      }}
    >
      <Row between centered>
        <View>
          <Text category="label" status="primary" style={{ letterSpacing: 2, paddingBottom: 3 }}>
            Welcome Back
          </Text>
          <Text category="h2" status="basic">
            Anakin Skywalker
          </Text>

        </View>

        <Button
          appearance="ghost"
          status="warning"
          onPress={() => navigation.navigate("AddTransaction")}
          size="large"
        >
          <Icon name="plus-outline" fill="#8F9BB3" />
        </Button>
      </Row>

      <Row style={{ marginTop: 40}}>

          <Text status="basic">
            Lastest transactions
          </Text>

      </Row>

      <TransactionList transactions={transactionList} />



    </Layout>
  );
}
