import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon2 from "@expo/vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { windowHeight } from "./Dimensions";

export default class Cards extends Component {
  render() {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: this.props.bg,
        }}
      >
        <View style={styles.col}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon
              style={{ marginLeft: 70 }}
              name="more-vertical"
              size={30}
              color="#fff"
              type="feather"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardDes}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text
            style={{
              ...styles.number,
            }}
          >
            ₹ {this.props.number}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 130,
    borderRadius: 30,
    padding: 15,
    marginLeft: 20,
    borderWidth: 1.4,
    borderColor: "grey",
    marginBottom: windowHeight / 7,
  },
  col: {
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(16),
  },
  number: {
    fontWeight: "bold",
    fontSize: RFValue(13),
    color: "#fff",
  },
  cardDes: {
    justifyContent: "center",
    flex: 1,
  },
});
