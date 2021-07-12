import React from "react";
import { View, Text ,StyleSheet } from "react-native";

export default function Forecast(props) {
  return (
    <View>
      <Text style={styles.Text1}>{props.main}</Text>
      <Text style={styles.Text2}>{props.description}</Text>
      <View style={styles.Row}>
        <Text style={styles.Text1}>{props.temp}</Text>
        <Text style={styles.Text2}>°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text1: {
    flexDirection: "column",
    fontSize: 20,
    color: '#FFFFFF',
  },
  Text2: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 16,
    color: '#FFFFFF',
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
})