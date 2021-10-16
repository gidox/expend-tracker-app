import { Row, TransactionForm } from "@components";
import { RootBottomParamList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { HOME_SPACING } from "@theme";
import { Icon, Text, Button } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Home({ navigation }): React.ReactElement {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: HOME_SPACING,
        marginTop: 20,
      }}
    >
      <Row between centered>
        <Text category="h1" status="primary" style={{ letterSpacing: 3 }}>
          Dashboard
        </Text>

        <Button
          appearance="ghost"
          status="warning"
          onPress={() => navigation.navigate("AddTransaction")}
        >
          <Icon name="plus-outline" fill="#8F9BB3" />
        </Button>
      </Row>
      {/* <Card>
        <TransactionForm />
      </Card> */}
    </View>
  );
}
