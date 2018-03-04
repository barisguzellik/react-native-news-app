import {StyleSheet} from 'react-native';

export class Style{
    static Style=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#212121',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    header:{
        backgroundColor:'#000000',
        alignItems: 'flex-start',
        padding:15,
        borderTopColor: '#212121',
        borderTopWidth: StyleSheet.hairlineWidth,
        width:'100%',
        display: 'none',
    },
    headerTitle:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listRow:{
        width:'100%',
        padding: 0,
        flex:1
    },
    listTitle:{
        color:'#fff',
        backgroundColor:'#000',
        opacity:1,
        fontSize: 16,
        padding:10,
        //marginTop: -65,
        fontWeight:'bold',
    },
    listImage:{
        width:'100%',
        height:200,
    }
});
}