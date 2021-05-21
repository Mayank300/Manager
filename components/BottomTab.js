import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductList from "../screens/ProductList";
import MyProducts from "../screens/MyProducts";
import SettingScreen from "../screens/SettingScreen";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
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
        name="Setting"
        component={SettingScreen}
        initialParams={{ icon: "settings" }}
      />
    </Tab.Navigator>
  );
}
