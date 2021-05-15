import React from "react";
import { View, TextComponent, StyleSheet, Dimensions } from "react-native";
import { windowWidth } from "./Dimensions";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = React.useState("Home");

  const { routes } = state;

  const renderColor = (currentTab) =>
    currentTab === selected ? "#05b5ff" : "rgb(108,116,118)";

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: windowWidth / 1.03,
    borderRadius: 100,
    elevation: 10,
  },
});

export default TabBar;
