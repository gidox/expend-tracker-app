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
import AddTransaction from "@screens/AddTransaction";

export type RootBottomParamList = {
  Home: undefined;
  Transactions: undefined;
  Account: undefined;
};

const Stack = createNativeStackNavigator();
const { Navigator, Screen, Group } =
  createBottomTabNavigator<RootBottomParamList>();

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
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    initialRouteName="Home"
  >
    <Screen name="Transactions" component={SettingsScreen} />
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen name="Account" component={SettingsScreen} />
  </Navigator>
);
export function NavigationContainer() {
  return (
    <NContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Group>
      </Stack.Navigator>
    </NContainer>
  );
}
