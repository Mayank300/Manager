import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import { windowHeight, windowWidth } from "../components/Dimensions";
import MyHeader from "../components/Header";
import LottieView from "lottie-react-native";
import { ListItem, Icon } from "react-native-elements";
import db from "../config";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.productRef = null;
  }

  componentDidMount() {
    this.animation.play();
    this.getProductList();
  }

  getProductList = () => {
    this.requestRef = db.collection("products").onSnapshot((snapshot) => {
      var list = snapshot.docs.map((doc) => doc.data());
      this.setState({
        list: list,
      });
    });
  };

  componentWillUnmount() {
    this.productRef;
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem key={i} bottomDivider>
        <Icon name="genderless" type="font-awesome" />
        <ListItem.Content>
          <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
            {item.product_name}
          </ListItem.Title>
          <ListItem.Subtitle>{item.total_cost}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("button view");
              // this.props.navigation.navigate("RecieverDetails",{"details": item})
            }}
          >
            <Icon size={28} name="arrow-right-circle" type="feather" />
          </TouchableOpacity>
        </View>
      </ListItem>
    );
  };

  render() {
    if (this.state.list.length === 0) {
      return (
        <View style={[styles.container, { backgroundColor: "#fff" }]}>
          <MyHeader title="Home" navigation={this.props.navigation} />
          <Text style={styles.text}>Nothing in the List Yet !</Text>
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
              source={require("../assets/empty.json")}
            />
          </View>
        </View>
      );
    } else if (this.state.list.length > 0) {
      return (
        <View style={styles.container}>
          <MyHeader title="Home" navigation={this.props.navigation} />
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
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
