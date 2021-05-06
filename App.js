import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "./components/BottomTab";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { AppDrawer } from "./components/AppDrawer";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  OnboardingScreen: OnboardingScreen,
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen,
  Drawer: AppDrawer,
  BottomTab: BottomTab,
});

const AppContainer = createAppContainer(switchNavigator);
{
  /* <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Drawer" component={AppDrawer} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer> */
}
