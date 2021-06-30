import React from "react";
import {StyleSheet, View} from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImagenScreen = () => {
    return (
        <View>
            <ImageDetail 
                title = "Forest" 
                imgPath = {require('../../assets/forest.jpg')}
                score = '9'
            />
            <ImageDetail 
                title = "Beach" 
                imgPath = {require('../../assets/beach.jpg')} 
                score = '7'
            />
            <ImageDetail 
                title = "Mountain" 
                imgPath = {require('../../assets/mountain.jpg')} 
                score = '4'
            />
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 30
  }
});

export default ImagenScreen;
