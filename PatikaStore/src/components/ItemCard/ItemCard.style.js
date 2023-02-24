import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
         margin: 5,
         padding:10,
        borderRadius:10,
        // width: '45%',
        flex:1,
        width: Dimensions.get('window').width / 2,
    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode:'contain'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    description:{
        marginTop:3,
    },
    author:{
        fontStyle:'italic',
        textAlign:'right',
    },
    inner_container:{
        padding:5,
    }
});