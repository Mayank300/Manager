import React, { Component } from "react";
import { Header } from "react-native-elements";

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" },
        }}
        backgroundColor="#54ccff"
      />
    );
  }
}
