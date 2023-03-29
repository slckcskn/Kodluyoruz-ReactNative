import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./Searchbar.styles";

const SearchBar = () => {
    return(
        <View>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Yapılacaklar..."
            />
        </View>
    );
}

export default SearchBar;