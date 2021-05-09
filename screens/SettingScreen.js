import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../components/Dimensions";
import firebase from "firebase";
import MyHeader from "../components/Header";

export class SettingScreen extends Component {
  render() {
    return (
      <View>
        <MyHeader title="Settings" navigation={this.props.navigation} />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("OnboardingScreen");
              firebase.auth().signOut();
            }}
          >
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    width: "55%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "grey",
    marginLeft: windowWidth / 30,
    marginTop: windowWidth / 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default SettingScreen;
