import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

const ColorCounter = ({colorName, onIncrease, onDecrease, colorNumber}) => {
    return (
        <View>
            <Text style = {styles.SimpleText}>{colorName}</Text>
            <View style = {styles.ViewHorizontal}>
                <TouchableOpacity 
                    onPress = { () => onDecrease() }
                    style = {styles.BtnStyle}>
                    <Text style={styles.BtnText}>-</Text>
                </TouchableOpacity>
                <Text style = {styles.SimpleText}>{colorNumber}</Text>
                <TouchableOpacity 
                    onPress = { () => onIncrease() }
                    style = {styles.BtnStyle}>
                    <Text style={styles.BtnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  BtnText: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 30
  },
  BtnStyle: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 30
  },
  SimpleText: {
    marginTop: 0,
    marginHorizontal: 10,
    fontSize: 20
  }, 
  ViewHorizontal: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center'
  }
});

export default ColorCounter;
