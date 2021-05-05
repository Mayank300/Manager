import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MyProducts from "../screens/MyProducts";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
