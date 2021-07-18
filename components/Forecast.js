import React from "react";
import { View, Text ,StyleSheet,Image } from "react-native";


export default function Forecast(props) {
  return (
    <View style={styles.top_box}>
      <View style={styles.holder_view}>
        <Text style={styles.Text1}>{props.name}</Text>
        <Text style={styles.Text1}>{props.main}</Text>
        <Text style={styles.Text2}>{props.description}</Text>
        <Image 
                source={{uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png',}} 
                style={styles.logo}/>
      </View>
      {/* <View style={styles.Row}>
        <Text style={styles.Text1}>{props.temp}</Text>
        <Text style={styles.Text2}>°C</Text>
      </View>
      <Text style={styles.Text2}>humidity : {props.humidity}</Text>
      <Text style={styles.Text2}>pressure : {props.pressure}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Text1: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 24,
    color: '#FFFFFF',
    textAlign:"center",
  },
  Text2: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 16,
    color: '#FFFFFF',
    textAlign:"center",
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Column: {
    flexDirection: "column",
    alignItems: "center",
  },
  Layout: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent:"space-evenly",
    height: "100%"
  },
  logo: {
    width: "50%",
    height:"80%"
  },
  top_box:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  holder_view:{
    height:"80%",
    width:"90%",
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  },
  
})