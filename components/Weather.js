import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
  });

  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <View style={styles.greybg}>
      <View style={styles.Row}>
        <Text style={styles.Text2}>Zip Code is </Text>
        <Text style={styles.Text2}>{props.zipCode}</Text>
      </View > 
      <View>
      <Forecast {...forecastInfo} />
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    // justifyContent:"space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  greybg: {
    // justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: "center",
    width: "100%",
    height: "30%",
    justifyContent:"space-evenly",
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text2: {
    paddingTop: '15%',
    flexDirection: "column",
    alignItems: "center",
    fontSize: 16,
    color: '#FFFFFF',
  },
});
