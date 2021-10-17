import * as React from "react";
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppLoading from "expo-app-loading";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as mapping } from "./theme/mapping.json";
import { NavigationContainer } from "@navigation";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_900Black,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need
import "intl/locale-data/jsonp/es"; // or any other locale you need

export default function App(): React.ReactElement {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_900Black,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <StatusBar style="auto" />
        <NavigationContainer />
      </ApplicationProvider>
    </>
  );
}
