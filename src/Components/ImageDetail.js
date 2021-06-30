import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image} from "react-native";

const ImageDetail = ({title,  imgPath, score}) => {
    // return <Text style={styles.text}>{props.title}</Text>;
    return (
        <View>
            <TouchableOpacity onPress={() => console.log(title)}>
                <Image source = {imgPath} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>Image Score - {score}</Text>
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

export default ImageDetail;
