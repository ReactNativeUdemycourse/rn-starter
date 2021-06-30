import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";

const ColorScreen = () => {
    const [colors, setColor] = useState([]);
    console.log(colors);
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setColor([...colors, randColor()]);
            }}>
                <Text style={styles.textBtn}>Add color!!</Text>
            </TouchableOpacity>
            <FlatList 
                keyExtractor = {(item) => item }
                data = {colors}
                renderItem = {({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item}}/>;
                }}
            />
        </View>
    )
};

const randColor = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  textBtn: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    marginTop: 0,
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 30
  },
  counter: {
    textAlign: 'center', // <-- the magic
    marginTop: 0,
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 20
  }
});

export default ColorScreen;
