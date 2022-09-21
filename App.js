import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>welcome to my pictures</Text>
      <Image source={{uri:'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/36554233_603187666747500_8692343087831187456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=110474&_nc_ohc=7Hl-fWkCB9sAX88anb1&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8l68sTxAV0SFp3s9t60zVRHTVSuFQgEBnez4vIxqDAww&oe=634F0120&dl=1'}} style={styles.image}/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text :{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  image: {
    width:170,
    height:170
  }
});
