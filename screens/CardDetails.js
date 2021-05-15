import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import Chart from "../components/Chart";
import { windowHeight } from "../components/Dimensions";

export default class CardDetails extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.optionCard}>
          <Icon name="bar-chart-2" type="feather" size={26} />
          <Text style={styles.textLogarthimic}>Product Graph</Text>
        </View>

        <Chart />

        <View style={styles.bottomCard}>
          <View style={styles.bottomCol}>
            <Text style={styles.textSymptoms}>Condition</Text>
            <View style={styles.infoContainer}></View>
          </View>

          <View style={styles.button}>
            <Text style={styles.btnText}>Don't sell this product</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  headContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 40,
  },
  humContainer: {
    width: "50%",
  },
  hum: {
    marginTop: -20,
    marginLeft: 5,
  },
  profileContainer: {
    width: "50%",
    alignItems: "flex-end",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: windowHeight / 13,
  },
  optionCol: {
    backgroundColor: "#000",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  textLinear: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  textLogarthimic: {
    fontWeight: "bold",
    fontSize: RFValue(26),
    marginLeft: 15,
  },
  locationContainer: {
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 40,
    alignItems: "center",
  },
  textGlobal: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
  textRussia: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#6a706e",
    paddingHorizontal: 30,
  },
  reloadContainer: {
    backgroundColor: "#FFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    elevation: 3,
  },
  bottomCard: {
    backgroundColor: "#1c2732",
    height: 330,
    marginTop: windowHeight / 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomCol: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  textSymptoms: {
    color: "#FFF",
    fontSize: RFValue(22),
    fontWeight: "bold",
  },
  infoContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  button: {
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 1,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 5,
  },
  btnText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});
