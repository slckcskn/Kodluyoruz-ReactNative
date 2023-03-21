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
        // backgroundColor:'orange',
        padding:10,
        flex:1,
        justifyContent:'center',
    },
    title: {
        fontWeight:'bold',
        fontSize:27,
    },
    info_container:{
        // backgroundColor:'red',
        flexDirection:'row',
        flex: 1,
        alignItems:'center'
    },
    year:{
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
        fontSize:12
    },
    soldout_container:{
        borderWidth: 1,
        borderColor:'red',
        borderRadius: 5,
        padding: 5
    },
    soldout_title:{
        color:'red'
    },
    content_container:{
        flexDirection:'row'
    }
});