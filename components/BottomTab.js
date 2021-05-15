import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import ProductList from "../screens/ProductList";
import NotificationScreen from "../screens/NotificationScreen";
import MyProducts from "../screens/MyProducts";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
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
        name="List"
        component={ProductList}
        initialParams={{ icon: "list" }}
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
        name="Setting"
        component={SettingScreen}
        initialParams={{ icon: "settings" }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
