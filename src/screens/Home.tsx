import { Row, TransactionForm, TransactionList } from "@components";
import { useTransactions } from "@hooks";
import { Skeleton } from "@motify/skeleton";
import { RootBottomParamList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { HOME_SPACING } from "@theme";
import { Icon, Text, Button, Layout } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { supabase } from "../supabaseClient";

export default function Home({ navigation }): React.ReactElement {
  const { data, isFetching, isFetched } = useTransactions();

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
          <Text
            category="label"
            status="primary"
            style={{ letterSpacing: 2, paddingBottom: 3 }}
          >
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

      <Row style={{ marginTop: 40 }}>
        <Text status="basic" category="label" style={{ fontSize: 16 }}>
          Lastest transactions:
        </Text>
      </Row>

      <Skeleton colorMode="light" show={isFetching}>
        {data && data.length > 0 ? (
          <TransactionList transactions={data} />
        ) : null}
      </Skeleton>

      {isFetched && data && data.length === 0 && (
        <View style={{ marginHorizontal: 5, flex: 1 }}>
          <Text style={{ textAlign: "center" }}>No data, add new</Text>
        </View>
      )}
    </Layout>
  );
}
