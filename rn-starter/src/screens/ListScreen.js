import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const people = [
        {name: 'Pessoa #1', age: 20},
        {name: 'Pessoa #2', age: 24},
        {name: 'Pessoa #3', age: 54},
        {name: 'Pessoa #4', age: 53},
        {name: 'Pessoa #5', age: 19},
        {name: 'Pessoa #6', age: 87},
        {name: 'Pessoa #7', age: 21},
        {name: 'Pessoa #8', age: 23},
        {name: 'Pessoa #9', age: 43}
    ]

    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={person => people.name}
            data={people} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;