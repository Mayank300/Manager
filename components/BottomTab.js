import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MyProducts from "../screens/MyProducts";
import SettingScreen from "../screens/SettingScreen";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ icon: "home" }}
      />
      <Tab.Screen
        name="Add"
        component={MyProducts}
        initialParams={{ icon: "plus" }}
      />
      <Tab.Screen
        name="Notice"
        component={NotificationScreen}
        initialParams={{ icon: "bell" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        initialParams={{ icon: "settings" }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
