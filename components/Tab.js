import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = ({ color, icon, tab, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Icon name={icon} type={"feather"} size={26} color={color} />}
      <Text style={{ color, fontSize: RFValue(13) }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default Tab;
