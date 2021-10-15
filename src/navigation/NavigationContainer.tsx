import * as React from "react";
import { NavigationContainer as NContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text,
} from "@ui-kitten/components";

import Home from "@screens/Home";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Transactions" icon={BellIcon} />
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Account" icon={PersonIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Transactions" component={SettingsScreen} />
    <Screen name="Home" component={Home} />
    <Screen name="Account" component={SettingsScreen} />
  </Navigator>
);
export function NavigationContainer() {
  return (
    <NContainer>
      <TabNavigator />
    </NContainer>
  );
}
