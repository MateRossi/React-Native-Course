import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    // state === {counter: number}
    //action === {type: 'increment' || 'decrement', payload: 1}
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + action.payload};
        case 'decrement':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    
    return (
        <View>
            <Button
                title="Increase" 
                onPress={() => {
                    //don't do this
                    //counter++;
                    dispatch({type: 'increment', payload: 1});
                }}
            />
            <Button 
                title="Decrease" 
                onPress={() => {
                    dispatch({type: 'decrement', payload: 1});
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;