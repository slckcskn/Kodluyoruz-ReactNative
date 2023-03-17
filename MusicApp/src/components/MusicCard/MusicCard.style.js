import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        padding:10,
        flexDirection:'row'
    },
    image: {
        width:100,
        height:100,
        borderRadius:50
    },
    inner_container: {
        backgroundColor:'orange',
        padding:10,
        flex:1
    },
    title: {
        fontWeight:'bold',
        fontSize:27,
    },
    info_container:{
        backgroundColor:'red',
        flexDirection:'row'
    },
    year:{
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
    }
});