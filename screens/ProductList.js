import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase";
import { windowHeight, windowWidth } from "../components/Dimensions";
import MyHeader from "../components/Header";
import LottieView from "lottie-react-native";
import { ListItem, Icon, SearchBar } from "react-native-elements";
import db from "../config";
import { ThemeProvider } from "@react-navigation/native";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchTxt: null,
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

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search Product..."
        lightTheme
        round
        onChangeText={this.updateSearch}
        editable={true}
        value={this.state.searchTxt}
      />
    );
  };

  updateSearch = (searchTxt) => {
    this.setState({ searchTxt }, () => {
      if ("" === searchTxt) {
        this.setState({
          list: [...this.state.list],
        });
        return;
      }
      this.state.list = this.state.list
        .filter(function (item) {
          return item.product_name.includes(searchTxt);
        })
        .map(function ({
          id,
          product_name,
          total_cost,
          quantity,
          date,
          exp_date,
          manu_date,
          description,
          time_added,
        }) {
          return {
            id,
            product_name,
            total_cost,
            quantity,
            date,
            exp_date,
            manu_date,
            description,
            time_added,
          };
        });
    });
  };

  componentWillUnmount() {
    this.productRef;
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    if (this.state.list.length === 0) {
      return (
        <View style={[styles.container, { backgroundColor: "#fff" }]}>
          <MyHeader title="Product List" navigation={this.props.navigation} />
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
          <MyHeader title="Product List" navigation={this.props.navigation} />
          <FlatList
            ListHeaderComponent={this.renderHeader}
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={({ item, i }) => {
              return (
                <View>
                  <ListItem key={i} bottomDivider>
                    <Icon name="genderless" type="font-awesome" />
                    <ListItem.Content>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <ListItem.Title
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Product Name :
                        </ListItem.Title>
                        <ListItem.Subtitle
                          style={{ marginLeft: 5, marginTop: 2 }}
                        >
                          {item.product_name}
                        </ListItem.Subtitle>
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <ListItem.Title
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Total Cost:
                        </ListItem.Title>
                        <ListItem.Subtitle
                          style={{ marginLeft: 5, marginTop: 2 }}
                        >
                          {item.total_cost}
                        </ListItem.Subtitle>
                      </View>
                    </ListItem.Content>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("ViewScreen", {
                            productName: item.product_name,
                            quantity: item.quantity,
                            date: item.date,
                            manuDate: item.manu_date,
                            expDate: item.exp_date,
                            description: item.description,
                            totalCost: item.total_cost,
                            time: item.time_added,
                          });
                        }}
                      >
                        <Icon
                          size={28}
                          name="arrow-right-circle"
                          type="feather"
                        />
                      </TouchableOpacity>
                    </View>
                  </ListItem>
                </View>
              );
            }}
          />
          <TouchableOpacity
            style={styles.button__for__margin}
          ></TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "#fff",
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
  button__for__margin: {
    marginTop: windowHeight / 8.2,
  },
});
