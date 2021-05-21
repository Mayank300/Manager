import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import firebase from "firebase";
import { windowHeight, windowWidth } from "../components/Dimensions";
import MyHeader from "../components/Header";
import { TextInput } from "react-native-paper";
import db from "../config";

export default class MyProducts extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      productName: "",
      quantity: "",
      totalCost: "",
      docId: "",
      manuDate: "",
      expDate: "",
      description: "",
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addProduct() {
    var randomNum = this.createUniqueId();
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    db.collection("products").add({
      product_name: this.state.productName,
      quantity: this.state.quantity,
      total_cost: this.state.totalCost,
      description: this.state.description,
      manu_date: this.state.manuDate,
      exp_date: this.state.expDate,
      request_id: randomNum,
      user_id: this.state.userId,
      date: date,
      time_added: `${hours} : ${minutes} : ${seconds}`,
    });

    this.setState({
      productName: "",
      quantity: "",
      totalCost: "",
      manuDate: "",
      expDate: "",
      description: "",
      requestId: randomNum,
    });

    return Alert.alert("Product Added Successfully.");
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Add Products" navigation={this.props.navigation} />
        <ScrollView>
          <TextInput
            label="Product Name"
            style={styles.input}
            value={this.state.productName}
            onChangeText={(text) => {
              this.setState({
                productName: text,
              });
            }}
          />
          <TextInput
            label="Product Description"
            style={styles.input}
            value={this.state.description}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
          />
          <TextInput
            label="Quantity"
            style={styles.input}
            value={this.state.quantity}
            onChangeText={(text) => {
              this.setState({
                quantity: text,
              });
            }}
          />
          <TextInput
            label="Total Cost"
            style={styles.input}
            value={this.state.totalCost}
            onChangeText={(text) => {
              this.setState({
                totalCost: text,
              });
            }}
          />
          <TextInput
            label="Manufacturer Date (dd-mm-yyyy)"
            style={styles.input}
            value={this.state.manuDate}
            onChangeText={(text) => {
              this.setState({
                manuDate: text,
              });
            }}
          />

          <TextInput
            label="Expiry Date (dd-mm-yyyy)"
            style={styles.input}
            value={this.state.expDate}
            onChangeText={(text) => {
              this.setState({
                expDate: text,
              });
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addProduct();
            }}
          >
            <Text style={styles.text}>ADD PRODUCT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  input: {
    width: "80%",
    marginLeft: windowWidth / 10,
    marginTop: windowWidth / 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#05b5ff",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#05b5ff",
    elevation: 16,
    marginLeft: windowWidth / 8,
    marginTop: windowWidth / 10,
    marginBottom: windowWidth / 3,
  },
  imgbutton: {
    width: "55%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "grey",
    marginLeft: windowWidth / 4.5,
    marginTop: windowWidth / 10,
  },
});
