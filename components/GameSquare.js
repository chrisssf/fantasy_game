import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Modal } from 'react-native';

// import Modal from 'modal-enhanced-react-native-web';
// import Modal from 'modal-react-native-web'


import boardImages from '../assets/boardImages'


const width = Dimensions.get('window').width


const GameSquare = ({ squareNumber, playerPositions }) =>{

    const [image, setImage] = useState(null)
    const [modalVisable, setModalVisable] = useState(false)

    const mage = {
        "image": "mage",
        "maxHp": 10,
        "currentHp": 6,
        "baseAttack": 8, 
        "equipedWeapon": null,
        "inventory": null,
        "spells": null
    }


useEffect(() => {
    if (playerPositions[0] === squareNumber) {
        setImage(mage.image)
    } else if (playerPositions[1] === squareNumber) {
        setImage("knight")
    } else if (playerPositions[2] === squareNumber) {
        setImage(null) 
    }

    if (squareNumber === 3){
        setModalVisable(true)
    }
}, [])


    console.log(width);
    
    if (width > 500) {
        return (
            <View style={styles.biggerContainer}>
                {/* <Text>{squareNumber}</Text> */}


                {image && <Image
                    style={{
                        width: 80,
                        height: 80,
                        // alignSelf: "center",
                        // justifyContent: "center"
                        // borderRadius: 20,
                        // marginTop: 10,
                        // marginHorizontal: 16
                    }}
                    // source={require("../assets/knight.png")}
                    source={boardImages[image]}
                    // source={{uri: animalImageURL}}
                />}

                {/* <Modal
                    style={{height: 500, width: 100}}
                    // animationType="slide"
                    // transparent={true}
                    visible={true}
                    // onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    // }}
                >
                    <Text>Hi</Text>
                </Modal> */}
            </View>
        )
        
    } else {
        return (
            <View style={styles.container}>
                {/* <Text>{squareNumber}</Text> */}

                {image && <Image
                    style={{
                        width: width/5 - 15,
                        height: width/5 - 15,
                        // alignSelf: "center",
                        // justifyContent: "center"
                        // borderRadius: 20,
                        // marginTop: 10,
                        // marginHorizontal: 16
                    }}
                    // source={require("../assets/knight.png")}
                    source={boardImages[image]}
                    // source={{uri: animalImageURL}}
                />}
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
                    // backgroundColor: '#00000080',
                    backgroundColor: 'rgba(80,80,80,0.09)',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <View style={{
                        width: 300,
                        height: 500,
                        backgroundColor: '#fff', 
                        padding: 20}}>
                            
                    <Text>Hi {console.log("in modal", modalVisable + " " + squareNumber)
                    }</Text>
                    
                    </View>
                </View>
                {/* <View style={{height: 70, width:50}}>
                    <Text>Hi</Text>
                </View> */}
            </Modal>
{/* <Modal
                    style={{height: 50, width: 10}}
                    // animationType="slide"
                    // transparent={true}
                    visible={false}
                    // onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    // }}
                >
                    <Text>Hi</Text>
                </Modal> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    //   border: '1 solid black',
        // borderColor: 'black',
        borderWidth: 1,
        // borderStyle: 'solid',
        width: width/5 - 15,
        height: width/5 - 15

        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    biggerContainer: {
        borderWidth: 1,
        width: 85,
        height: 85,

    },
  });

export default GameSquare

