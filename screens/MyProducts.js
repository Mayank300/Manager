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
import { Icon, Avatar } from "react-native-elements";

export default class MyProducts extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      productName: "",
      quantity: "",
      eachCost: "",
      totalCost: "",
      totalMoneyFromProductList: [],
      docId: "",
    };
  }

  componentDidMount() {
    this.getTotalCostFromProductList();
  }

  getTotalCostFromProductList() {
    var email = firebase.auth().currentUser.email;
    db.collection("products")
      .where("user_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            totalMoneyFromProductList: data.total_cost,
            docId: doc.id,
          });

          console.log(
            "this is the total cost of all products inside products collection --> " +
              this.state.totalMoneyFromProductList
          );
        });
      });
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="My Products" navigation={this.props.navigation} />
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
            // onPress={() => {
            //   this.alertForm();
            // }}
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
