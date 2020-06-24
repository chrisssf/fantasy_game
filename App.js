import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import GameScreen from './screens/GameScreen'

export default function App() {
  
  return (
    <View style={styles.container1}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <GameScreen />
      {console.log("platform =", Platform.OS)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    // flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    margin: 30
    
  },
});
