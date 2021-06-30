import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const Friends =[
        {name: 'Friend1', age: 12},
        {name: 'Friend2', age: 13},
        {name: 'Friend3', age: 16},
        {name: 'Friend4', age: 14},
        {name: 'Friend5', age: 34},
        {name: 'Friend6', age: 24}
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor = {(Friends) => Friends.name}
            data = {Friends} 
            renderItem = {({item}) => {
                //element === { item: {name: 'Friend1'}, index: 0}
                return (
                    <View>
                        {/* <TouchableOpacity onPress={() => console.log('Hola de lista!!')}>
                            <Text style ={styles.textStyle2}>{item.name} - Age {item.age}</Text>
                        </TouchableOpacity> */}
                        <Text style ={styles.textStyle2}>{item.name} - Age {item.age}</Text>      
                    </View>
                );
            }}
        />
        );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 30
    }
});

export default ListScreen;