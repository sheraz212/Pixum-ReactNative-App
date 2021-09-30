import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Main from "./components/Main";
import cScreen from "./components/cScreen";
import showImages from "./components/showImages";
import loading from "./components/loading";

import logo from "./assets/logo.png";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          title: "PIXUM",
          headerStyle: {
            backgroundColor: "#0080FF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={cScreen}
        options={{
          title: "PIXUM",
          headerStyle: {
            backgroundColor: "#0080FF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Images"
        component={showImages}
        options={{
          headerLeft: null,
          title: "PIXUM",
          headerStyle: {
            backgroundColor: "#0080FF",
          },

          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={logo} />;
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
