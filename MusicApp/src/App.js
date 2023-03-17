import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import  music_data  from './music-data.json';
import MusicCard from './components/MusicCard';


function App() {
  
const renderMusic = ({ item }) => <MusicCard music={item}  />
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <FlatList 
                    data={music_data}
                    renderItem={renderMusic}
                    keyExtractor={item => item.id}
                />
                
            </View>
        </SafeAreaView>
    );

}

export default App;

const styles = StyleSheet.create({
    container: { flex: 1 },

});
