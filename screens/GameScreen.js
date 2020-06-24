import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameBoard from '../components/GameBoard'
import GameActionBar from '../components/GameActionBar'

const GameScreen = () =>{


    return (
        <View style={styles.container2}>
            {/* <Text>GameScreen</Text> */}
            <GameBoard />
            <GameActionBar />

            {/* <View style={styles.thing}></View>
            <View style={styles.thing}></View>
            <View style={styles.thing}></View> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container2: {
    //   flex: 1,
    //   flexDirection: 'row',
      borderWidth: 1,
    //   height: 100,
    //   width: 300,
    //   backgroundColor: 'blue',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    thing: {
        backgroundColor: 'red',
        height: 30,
        width: 30,
        margin: 10
        
    }
});


export default GameScreen