import React, { useState, useEffect, Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import firebase from "firebase";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { windowHeight } from "../components/Dimensions";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("BottomTab");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.text}>Manager</Text>
          <FormInput
            labelValue={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            labelValue={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />

          <FormButton
            buttonTitle="Sign In"
            onPress={() => this.login(this.state.email, this.state.password)}
          />

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          >
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
