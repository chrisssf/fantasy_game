import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';

import GameSquare from './GameSquare'

const GameBoard = () => {

    const [magicPosition, setMagicPosition] = useState(16)
    const [meleePosition, setMeleePosition] = useState(6)
    const [healerPosition, setHealerPosition] = useState(0)


    const fillGameBoard = () => {

        const playerPositions = [magicPosition, meleePosition, healerPosition]
        console.log(playerPositions);
        

        // const gameSquares = []

        // for ( let i = 1; i < 26; i++ ) {
        //     gameSquares.push(i)
        // }  
        // return <FlatList 
        //     data={gameSquares}
        //     renderItem={({ item }) => <GameSquare squareNumber={item} />}
        //     keyExtractor={item => item}
        //     numColumns={5}
        // />


        // using grid which doesnt work with react native
        const gameSquares = []
        for ( let i = 1; i < 26; i++ ) {
            gameSquares.push(<GameSquare key={i} playerPositions={playerPositions} squareNumber={i}/>)
        }   
        // console.log(gameSquares);
        
        return gameSquares  
    }

    return (
        <View style={styles.container}>
            <Text>GameBoard</Text>
            <View style={styles.boardContainer}>
                {fillGameBoard()}
            </View>
            <Modal
                // style={{height: 50, width: 50}}
                // animationType="slide"
                transparent={true}
                visible={false}
                // onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // }}
            >  
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: '#00000080',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <View style={{
                        width: 300,
                        height: 500,
                        backgroundColor: '#fff', 
                        padding: 20}}>
                            
                        <Text>Hi</Text>
                    
                    </View>
                </View>
                {/* <View style={{height: 70, width:50}}>
                    <Text>Hi</Text>
                </View> */}
            </Modal>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        

        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    boardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 425,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default GameBoard