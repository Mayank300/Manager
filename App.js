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
  OnboardingScreen: { screen: OnboardingScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  Drawer: { screen: AppDrawer },
  BottomTab: { screen: BottomTab },
});

const AppContainer = createAppContainer(switchNavigator);
