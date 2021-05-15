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
import { ListItem, Icon } from "react-native-elements";
import db from "../config";
import Cards from "../components/Cards";
import { RFValue } from "react-native-responsive-fontsize";
import Chart from "../components/Chart";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      sortType: "asc",
    };
    this.productRef = null;
  }

  componentDidMount() {
    this.animation.play();
    this.getProductList();
  }

  keyExtractor = (item, index) => index.toString();

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

  render() {
    if (this.state.list.length === 0) {
      return (
        <View style={[styles.container1, { backgroundColor: "#fff" }]}>
          <MyHeader title="Dashboard" navigation={this.props.navigation} />
          <Text style={styles.text}>Loading...</Text>
          <View style={styles.lottie}>
            <LottieView
              ref={(animation) => {
                this.animation = animation;
              }}
              style={{
                width: 250,
                height: 250,
                backgroundColor: "#fff",
              }}
              source={require("../assets/loading.json")}
            />
          </View>
        </View>
      );
    } else if (this.state.list.length > 0) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <MyHeader title="Dashboard" navigation={this.props.navigation} />

            {/* <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            showsVerticalScrollIndicator={false}
            renderItem={() => ( */}
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: -40,
                }}
              >
                <Icon
                  style={{ marginLeft: 10 }}
                  size={RFValue(25)}
                  name="genderless"
                  type="font-awesome"
                />
                <Text style={styles.cardT}>SALES GRAPH</Text>
              </View>
              <Chart />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Icon
                  style={{ marginLeft: 10 }}
                  size={RFValue(25)}
                  name="genderless"
                  type="font-awesome"
                />
                <Text style={styles.cardT}>MY PRODUCTS</Text>
              </View>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={this.keyExtractor}
                data={this.state.list}
                renderItem={({ item, i }) => {
                  return (
                    <View style={styles.card}>
                      <Cards
                        bg="#4d5c6b"
                        title={item.product_name}
                        number={item.total_cost}
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
                      />
                    </View>
                  );
                }}
              />
            </View>
            {/* )}
          /> */}
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container1: {
    height: windowHeight,
    backgroundColor: "#fff",
  },
  container: {
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
  cardT: {
    textAlign: "left",
    fontSize: RFValue(23),
    color: "#000",
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  // card: {
  //   marginBottom: windowHeight / 7,
  // },
});
