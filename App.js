import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import React ,{useState}from 'react';
import { AppLoading } from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import RegisterStack from './routes/regiserStack';
import HomeStack from './routes/homeStack';


// const getFonts= async ()=> await Font.loadAsync({
//      'lato':require("./assets/fonts/Latin-Thin.ttf"),
//      'dosis':require('./assets/fonts/Dosis-Light.ttf')
// })



function App() {
  const [isAuthenticted,setIsAuthenticated]=useState(false)
  return (
    isAuthenticted?  <RegisterStack/>:
      <HomeStack/>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight:"100%",
    justifyContent: 'space-between',
    paddingTop:"10%",
    padding:"5%"
  },
});

export default App