import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./components/BottomTab";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import Account from "./screens/Account";
import ViewScreen from "./screens/ViewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ViewScreen"
          component={ViewScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
