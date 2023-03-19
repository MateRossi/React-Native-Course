import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.mainViewStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop: 100,
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
    },
    
    /*
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,

        //equivalente a: position: absolute, left:0, top:0, bottom:0, right: 0.
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
    */
});

export default BoxScreen;
