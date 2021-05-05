import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import MyProducts from "../screens/MyProducts";
import NotificationScreen from "../screens/NotificationScreen";
import CustomSideBarMenu from "./CustomSideBarMenu";

export const AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="feather" />,
      },
    },

    Add: {
      screen: MyProducts,
      navigationOptions: {
        drawerIcon: <Icon name="shopping-bag" type="feather" />,
      },
    },
    Notice: {
      screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="feather" />,
      },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
