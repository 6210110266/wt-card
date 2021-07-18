import React from "react";
import { StyleSheet,View, Text,FlatList,TouchableHighlight,ImageBackground,Dimensions, SafeAreaView,  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation  } from "@react-navigation/core";

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
];
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
    <View style={styles.zipItem}>
    <Text style = {styles.zipPlace}>{place}</Text>
    <Text style = {styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
    )

const _keyExtractor = (item) => item.code;
export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerbg}>
      <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
      <Text style={styles.text} >TH Country Weather </Text>
      <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
      <StatusBar style="auto" />
    
     </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  zipItem: {
    flex: 1,
        height:"100%",
        width:"80%",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:"10%",
        marginTop:"3.5%",
       

  },
  zipPlace: {
    flex: 1,
    fontSize:20,
    color:"#464646",
    marginLeft:"5%",
  },
  zipCode: {
    flex: 1,
    fontSize:20,
    color:"#464646",
    marginLeft:"28%",
  },
  containerbg: {
    height:Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  },
  backdrop: {
    width: '100%',
    height: '100%',
},
text: {
  fontSize:25,
  color:"#FFF",
  fontWeight:"bold",
  marginLeft:"10%",
  marginTop:"5%"
},
})