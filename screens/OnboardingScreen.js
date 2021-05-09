import React, { Component, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import firebase from "firebase";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 8,
    }}
    {...props}
  >
    <Text style={{ fontSize: 18 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    checkIfLoggedIn();
  });

  function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("BottomTab");
      }
    });
  }

  return (
    <Onboarding
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("LoginScreen")}
      onDone={() => navigation.replace("LoginScreen")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Welcome !!!",
          subtitle: "If You Get Tired, Learn To Rest Not To Quit.",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Manage !!!",
          subtitle: "Your Products With Me For Profit",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../assets/onboarding-img3.png")} />,
          title: "Get Started !!!",
          subtitle: "Be Up To Date With Everything Around You.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
