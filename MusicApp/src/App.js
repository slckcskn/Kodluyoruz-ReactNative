import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import music_data from './music-data.json';
import MusicCard from './components/MusicCard';
import SearchBar from './components/SearchBar';


function App() {

    const [list, setList] = useState(music_data);
    const renderMusic = ({ item }) => <MusicCard music={item} />
    const renderSeperator = () => <View style={styles.seperator} />
    const handleSearch = text => {
        const filteredList = music_data.filter(music => {
            const searchedText = text.toLowerCase();
            const currentTitle = music.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;

        });
        setList(filteredList);
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <SearchBar onSearch={handleSearch} />
                <FlatList
                    data={list}
                    renderItem={renderMusic}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={renderSeperator}
                />

            </View>
        </SafeAreaView>
    );

}

export default App;

const styles = StyleSheet.create({
    container: { flex: 1 },
    seperator: {
        borderWidth: 0.5,
        borderColor: 'gray'
    }
});
