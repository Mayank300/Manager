import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View } from "react-native";
import db from "../config";
import firebase from "firebase";

export default class MyHeader extends Component {
  BellIconWithBadge = () => {
    return (
      <View>
        <Icon
          name="bell"
          type="feather"
          color="#fff"
          size={30}
          onPress={() => this.props.navigation.navigate("Notice")}
        />

        <Badge
          value="0"
          containerStyle={{
            position: "absolute",
            top: -4,
            right: -4,
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" },
        }}
        rightComponent={<this.BellIconWithBadge {...this.props} />}
        backgroundColor="#54ccff"
      />
    );
  }
}
