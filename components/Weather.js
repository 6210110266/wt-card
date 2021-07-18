import React, { useState ,useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Forecast from "./Forecast";
import SearchInput from "../components/SearchInput";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: "main",
        description: "description",
        temp: 0,
        icon: "icon",
        name: "name",
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
                name: json.name
            });
            })
            .catch((error) => {
            console.warn(error);
            });
        }
    }, [props.zipCode])
  

  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <View style={styles.greybg}>
        <View style={styles.Row}>
          <Text style={styles.Text2}>Zip Code is </Text>
          <Text style={styles.Text2}>{props.zipCode}</Text>
        </View>
        <View>
          <Forecast {...forecastInfo} />
        </View>
      </View>
      <SearchInput searchPlaceHoder={"Search any city"}/>
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
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    width: "100%",
    height: "30%",
    justifyContent: "space-evenly",
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text2: {
    paddingTop: "15%",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
});

// export const getImageBackgroundSrc = (weatherName) => {
//   let listWeather = {
//       'sn': require('./../../assets/weather/sn.png'), //snow
//       'sl': require('./../../assets/weather/sl.png'), //Sleet
//       'h': require('./../../assets/weather/h.png'), //Hail
//       't': require('./../../assets/weather/t.png'), //Thunderstorm
//       'hr': require('./../../assets/weather/hr.png'), //Heavy Rain
//       'lr': require('./../../assets/weather/lr.png'), //Light Rain
//       's': require('./../../assets/weather/s.png'), //Showers
//       'hc': require('./../../assets/weather/hc.png'), //Heavy Cloud
//       'lc': require('./../../assets/weather/lc.png'), //Light Cloud
//       'c': require('./../../assets/weather/c.png'), //Clear

//   };

//   return listWeather[weatherName];
// }