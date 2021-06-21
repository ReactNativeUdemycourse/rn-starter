import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ListScreen = () => {
    const text1 = 'Getting started w/ react native!!';
    const name =  'ellioth';
    const text2 = <Text style = {styles.textStyle2}>My name is {name}</Text>;
    return (
        <View>
            <Text style={styles.textStyle1}>{text1}</Text>
            {text2}
        </View>
        );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ListScreen;