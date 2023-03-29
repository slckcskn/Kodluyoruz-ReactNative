import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Button } from 'react-native';
import Todocard from './components/ToDoCard';
import Searchbar from './components/SearchBar';

const [text, settext] = useState[''];
const [todo, settodo] = useState[[]];

const renderItem = ({renderItem}) => <Todocard todos={todo}/>;

function App() {
    <SafeAreaView>
        <View></View>
        <FlatList
        renderItem={renderItem}
        data={todo}
        />
    </SafeAreaView>


}

export default App;

const styles = StyleSheet.create({
    container: { flex: 1 },
    seperator: {
        borderWidth: 0.5,
        borderColor: 'gray'
    }
});
