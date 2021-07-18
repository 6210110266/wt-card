import React from "react";
import { StyleSheet,View, Text,FlatList,TouchableHighlight,ImageBackground } from "react-native";
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
    <Text>{place}</Text>
    <Text >{code}</Text>
    </View>
    </TouchableHighlight>
    )

const _keyExtractor = (item) => item.code;
export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
    <View>
      <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
      <StatusBar style="auto" />
    </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  zipItem: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  zipPlace: {
    flex:1,
    
  },
  zipCode: {
    flex:1,
    
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  },
  backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}
})