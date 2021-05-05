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
      eachCost: "",
      totalCost: "",
      user: [],
    };
  }

  componentDidMount() {
    this.getTotalCost();
  }

  getTotalCost() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            id: doc.id,
            totalCost: doc.data().total_money,
          });
        });
      });
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  alertForm() {
    this.setState({
      totalCost: this.state.quantity * this.state.eachCost,
    });

    return Alert.alert("Product Added Successfully =)", "", [
      {
        text: "OK",
        onPress: () => {
          this.addProduct();
        },
      },
    ]);
  }

  addProduct() {
    var randomRequestId = this.createUniqueId();
    db.collection("products").add({
      user_id: this.state.userId,
      product_name: this.state.productName,
      quantity: this.state.quantity,
      total_cost: this.state.totalCost,
      request_id: randomRequestId,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    this.setState({
      productName: "",
      quantity: "",
      totalCost: "",
      eachCost: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="My Products" />
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
            label="Cost of Each Product"
            style={styles.input}
            value={this.state.eachCost}
            onChangeText={(text) => {
              this.setState({
                eachCost: text,
              });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.alertForm();
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
});
