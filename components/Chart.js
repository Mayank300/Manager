import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { windowHeight, windowWidth } from "./Dimensions";

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 40,
        }}
      >
        <ProgressChart
          data={[0.1, 0.6, 0.2, 0.4]}
          width={Dimensions.get("window").width - 16}
          height={250}
          chartConfig={{
            backgroundColor: "#54ccff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 0) => `rgba(84, 204, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}
