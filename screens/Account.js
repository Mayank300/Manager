import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";
import db from "../config";
import { TextInput } from "react-native-paper";
import { windowWidth, windowHeight } from "../components/Dimensions";

export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      name: "",
      docId: "",
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            name: data.first_name,
            docId: doc.id,
          });
          console.log(this.state.password);
        });
      });
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.name,
      email_id: this.state.emailId,
    });
    Alert.alert("Profile Updated Successfully");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            type="feather"
            name="arrow-left"
            size={RFValue(30)}
            onPress={() => this.props.navigation.navigate("Setting")}
          />
        </View>
        <View>
          <TextInput
            label="Name"
            style={styles.input}
            value={this.state.name}
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
          />
          <TextInput
            label="Email"
            style={styles.input}
            value={this.state.emailId}
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateUserDetails();
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: windowHeight / 12,
    marginLeft: -windowWidth / 1.2,
  },
  input: {
    width: "80%",
    marginLeft: windowWidth / 10,
    marginTop: windowWidth / 10,
  },
  button: {
    width: "55%",
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "grey",
    marginTop: windowHeight / 15,
    marginLeft: windowWidth / 4.5,
  },
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
});
