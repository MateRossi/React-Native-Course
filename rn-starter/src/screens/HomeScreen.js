import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Mateus Gatão</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button
        style={styles.button} 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default HomeScreen;
