import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import firebase from "firebase";
import { windowHeight, windowWidth } from "../components/Dimensions";
import MyHeader from "../components/Header";
import LottieView from "lottie-react-native";

export default class NotificationsScreen extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    if (this.state.list.length === 0) {
      return (
        <View style={[styles.container, { backgroundColor: "#fff" }]}>
          <MyHeader title="Notifications" />
          <ScrollView>
            <Text style={styles.text}>No Notifications Yet !</Text>

            <View style={styles.lottie}>
              <LottieView
                ref={(animation) => {
                  this.animation = animation;
                }}
                style={{
                  width: 400,
                  height: 400,
                  backgroundColor: "#fff",
                }}
                source={require("../assets/noNotice.json")}
              />
            </View>
          </ScrollView>
        </View>
      );
    } else if (this.state.list.length > 0) {
      return (
        <View style={styles.container}>
          <MyHeader title="Notifications" />
          <Text style={styles.text}>Hello</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(102, 167, 197, 0.7)",
    height: windowHeight,
  },
  lottie: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 28,
    marginTop: 20,
    color: "#051d5f",
    textAlign: "center",
  },
});
