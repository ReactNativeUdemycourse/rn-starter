import React, {useReducer, useState} from "react";
import {StyleSheet, View} from "react-native";
import ColorCounter from "../Components/ColorCounter";

const INCREMENT = 15;
const DECREMENT = -15;
const MIN = 0;
const MAX = 255;

const reducer = (state, action) =>{
    switch(action.colorToChange){
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const SquareScreenOP = () => {
    const [state, runReducer] = useReducer(reducer, {red: 0, green: 0 , blue: 0});
    const {red, green, blue} = state;
    return (
        <View>
            <ColorCounter 
                onIncrease = {() => reducer({colorToChange:'red'}, {amount: INCREMENT})}
                onDecrease = {() => reducer({colorToChange:'red'}, {amount: DECREMENT})}
                colorName='Red' colorNumber ={red}/>
            <ColorCounter 
                onIncrease = {() => reducer({colorToChange:'blue'}, {amount: INCREMENT})}
                onDecrease = {() => reducer({colorToChange:'blue'}, {amount: DECREMENT})}
                colorName='Blue' colorNumber ={blue}/>
            <ColorCounter 
                onIncrease = {() => reducer({colorToChange:'green'}, {amount: INCREMENT})}
                onDecrease = {() => reducer({colorToChange:'green'}, {amount: DECREMENT})}
                colorName='Green' colorNumber ={green}/>
            <View style={{ 
                height: 100, 
                width: 100, 
                backgroundColor: `rgb(${red},${green},${blue})`
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 0,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20
  }
});

export default SquareScreenOP;
