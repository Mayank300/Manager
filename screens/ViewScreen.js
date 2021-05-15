import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { windowHeight, windowWidth } from "../components/Dimensions";
import * as ScreenCapture from "expo-screen-capture";
import * as MediaLibrary from "expo-media-library";

export default class ViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      await ScreenCapture.allowScreenCaptureAsync();
      ScreenCapture.addScreenshotListener(() => {
        alert("Screen Shot Successfully Taken.");
      });
    }
  }

  render() {
    const {
      productName,
      quantity,
      totalCost,
      date,
      manuDate,
      expDate,
      time,
      description,
    } = this.props.route.params;

    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            type="feather"
            name="arrow-left"
            size={RFValue(30)}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <ScrollView>
          <View style={styles.card}>
            <Card>
              <Card.Title style={styles.cardTitle}>
                Product Information
              </Card.Title>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Product Name : </Text>
                <Text style={styles.cardSubText}>
                  {JSON.stringify(productName)}
                </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Quantity : </Text>
                <Text style={styles.cardSubText}>
                  {JSON.stringify(quantity)}
                </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Total Cost : </Text>
                <Text style={styles.cardSubText}>
                  {JSON.stringify(totalCost)}
                </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Date Added : </Text>
                <Text style={styles.cardSubText}> {JSON.stringify(date)} </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Time Added : </Text>
                <Text style={styles.cardSubText}> {JSON.stringify(time)} </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Manufacturer Date : </Text>
                <Text style={styles.cardSubText}>
                  {JSON.stringify(manuDate)}
                </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Expiry Date : </Text>
                <Text style={styles.cardSubText}>
                  {JSON.stringify(expDate)}{" "}
                </Text>
              </View>

              <View style={styles.cardView}>
                <Icon name="genderless" type="font-awesome" size={20} />
                <Text style={styles.cardText}>Product Description : </Text>
              </View>
              <Text style={[styles.cardSubText, { textAlign: "center" }]}>
                {JSON.stringify(description)}
              </Text>
            </Card>
          </View>
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
  icon: {
    marginTop: windowHeight / 12,
    marginLeft: -windowWidth / 1.2,
  },
  card: {
    marginTop: windowHeight / 10,
  },
  cardTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(30),
  },
  cardView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(20),
    marginLeft: 10,
    marginTop: 10,
  },
  cardSubText: {
    fontSize: RFValue(16),
    marginTop: 10,
  },
});
