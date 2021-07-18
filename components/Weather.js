import React, { useState ,useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground,SafeAreaView, Dimensions} from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: "main",
        description: "description",
        temp: 0,
        icon: "icon",
        name: "name",
        humidity: 0,
        pressure: 0,
    });

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1907c2e8455bbd7749315815aad1ff88`)
            .then((response) => response.json())
            .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp,
                icon: json.weather[0].icon,
                name: json.name,
                humidity: json.main.humidity,
                pressure: json.main.pressure,
            });
            })
            .catch((error) => {
            console.warn(error);
            });
        }
    }, [props.zipCode])
  

  return (
    <SafeAreaView style={styles.containerbg}>
      <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
      <Text style={styles.zipText}>Zipcode : {props.zipCode}</Text>
        <Forecast {...forecastInfo} />
      </ImageBackground>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    // flexDirection: "column",
    // justifyContent:"space-between",
    // alignItems: "center",
    width: "100%",
    height: "100%",
  },
  containerbg: {
    height:Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  zipText: {
    fontSize:20,
        color:"#464646",
        marginLeft:"55%",
        marginTop:"2%",
        color:"#FFF",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
  },
});
