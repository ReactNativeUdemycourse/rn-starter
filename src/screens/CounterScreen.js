import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { set } from "react-native-reanimated";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setCounter(counter + 1);
            }}>
                <Text style={styles.textBtn}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setCounter(counter - 1);
            }}>
                <Text style={styles.textBtn}>Decrease</Text>
            </TouchableOpacity>
            <Text style={styles.counter}>Current count: {counter}</Text>
        </View>
    )
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

export default CounterScreen;
