import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import ColorCounter from "../Components/ColorCounter";

const INCREMENT = 15;
const DECREMENT = -15;
const MIN = 0;
const MAX = 255;

const SquareScreen = () => {
    const [red, setRed] = useState(MIN);
    const [blue, setBlue] = useState(MIN);
    const [green, setGreen] = useState(MIN);

    return (
        <View>
            <ColorCounter 
                onIncrease = {() => setRed(limitColor(red, INCREMENT))}
                onDecrease = {() => setRed(limitColor(red, DECREMENT))}
                colorName='Red' colorNumber ={red}/>
            <ColorCounter 
                onIncrease = {() => setBlue(limitColor(blue, INCREMENT))}
                onDecrease = {() => setBlue(limitColor(blue, DECREMENT))}
                colorName='Blue' colorNumber ={blue}/>
            <ColorCounter 
                onIncrease = {() => setGreen(limitColor(green, INCREMENT))}
                onDecrease = {() => setGreen(limitColor(green, DECREMENT))}
                colorName='Green' colorNumber ={green}/>
            <View style={{ 
                height: 100, 
                width: 100, 
                backgroundColor: `rgb(${red},${green},${blue})`
                }}/>
        </View>
    );
};

const limitColor = (color, change) => {
    var outVal = color + change;
    (color + change) > MAX ? outVal = MAX : null;
    (color + change) < MIN ? outVal = MIN : null;
    return outVal;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 0,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20
  }
});

export default SquareScreen;
