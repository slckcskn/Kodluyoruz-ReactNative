import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions, FlexWrap, TextInput } from 'react-native';
import ItemCard from './components/ItemCard/ItemCard.js';
import item_data from './item_data.json';

function App() {

    const renderItem = ({ item }) => <ItemCard items={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>PATIKA STORE</Text>
                <TextInput style={styles.textInput} placeholder="Ara.." />
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={item_data}
                    renderItem={renderItem}
                    horizontal={false}
                    numColumns={2}

                />

            </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#eceff1',
    },
    title: {
        color: "#8b008b",
        fontWeight: "bold",
        fontSize: 40,
        paddingTop: 5,
        marginLeft: 10,
    },

})

export default App;
