import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";

// const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Comp')}>
          <Text style={styles.text}>Go to Component demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
          <Text style={styles.text}>Go to List demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImSc')}>
          <Text style={styles.text}>Go to ImageScreen Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('count')}>
          <Text style={styles.text}>Go to Counter screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('color')}>
          <Text style={styles.text}>Go to Color screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('square')}>
          <Text style={styles.text}>Go to square screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('squareop')}>
          <Text style={styles.text}>Go to squareOP screen</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20
  }
});

export default HomeScreen;
