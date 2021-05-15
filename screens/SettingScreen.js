import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { windowHeight, windowWidth } from "../components/Dimensions";
import firebase from "firebase";
import MyHeader from "../components/Header";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
export class SettingScreen extends Component {
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
            password: data.password,
            docId: doc.id,
          });
        });
      });
  };

  logout() {
    return Alert.alert("Are You Sure You Want to \r\n Log out ?", "", [
      {
        text: "Yes",
        onPress: () => {
          this.props.navigation.navigate("OnboardingScreen");
          firebase.auth().signOut();
        },
      },
      {
        text: "No",
      },
    ]);
  }

  render() {
    return (
      <View>
        <MyHeader title="Settings" navigation={this.props.navigation} />
        <ScrollView>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Account")}
            >
              <View style={styles.rows}>
                <Icon
                  style={styles.row__icon}
                  name="user"
                  type="feather"
                  size={RFValue(25)}
                />
                <Text style={styles.rowtext}>Account</Text>
                <View style={styles.rows__view}>
                  <Icon
                    style={styles.view__icon}
                    name="chevron-right"
                    type="feather"
                    size={RFValue(28)}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("List")}
            >
              <View style={styles.rows}>
                <Icon
                  style={styles.row__icon}
                  name="list"
                  type="feather"
                  size={RFValue(25)}
                />
                <Text style={styles.rowtext}>Product List</Text>
                <View style={styles.rows__view}>
                  <Icon
                    style={styles.view__icon}
                    name="chevron-right"
                    type="feather"
                    size={RFValue(28)}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Add")}
            >
              <View style={styles.rows}>
                <Icon
                  style={styles.row__icon}
                  name="plus"
                  type="feather"
                  size={RFValue(25)}
                />
                <Text style={styles.rowtext}>Add Product</Text>
                <View style={styles.rows__view}>
                  <Icon
                    style={styles.view__icon}
                    name="chevron-right"
                    type="feather"
                    size={RFValue(28)}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notice")}
            >
              <View style={styles.rows}>
                <Icon
                  style={styles.row__icon}
                  name="bell"
                  type="feather"
                  size={RFValue(25)}
                />
                <Text style={styles.rowtext}>Notifications</Text>
                <View style={styles.rows__view}>
                  <Icon
                    style={styles.view__icon}
                    name="chevron-right"
                    type="feather"
                    size={RFValue(28)}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.logout();
              }}
            >
              <View style={styles.rows}>
                <Icon
                  style={styles.row__icon}
                  name="log-out"
                  type="feather"
                  size={RFValue(25)}
                />
                <Text style={styles.rowtext}>Logout</Text>
                <View style={styles.rows__view}>
                  <Icon
                    style={styles.view__icon}
                    name="chevron-right"
                    type="feather"
                    size={RFValue(28)}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

{
  /* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("OnboardingScreen");
              firebase.auth().signOut();
            }}
          >
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity> */
}

const styles = StyleSheet.create({
  rows: {
    display: "flex",
    flexDirection: "row",
    marginLeft: windowWidth / 8,
    marginTop: windowHeight / 22,
    alignItems: "center",
  },
  rowtext: {
    fontSize: RFValue(25),
  },
  row__icon: {
    marginRight: 30,
  },
  row__icon__view: {
    marginRight: -20,
  },
  rows__view: {
    position: "absolute",
    top: "10%",
    right: "10%",
  },
});

export default SettingScreen;
