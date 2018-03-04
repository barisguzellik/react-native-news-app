import {StyleSheet} from 'react-native';

export class Style{
    static Style=StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'#212121',
            padding:0,
        },
        header:{
            backgroundColor:'#000000',
            alignItems: 'flex-start',
            padding:15,
            borderBottomColor: '#212121',
            borderBottomWidth: StyleSheet.hairlineWidth,
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
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 10,
        },
        listTitle:{
            color:'#fff',
            fontSize: 20,
        },
        listDesc:{
            color:'#fff',
            fontSize: 15,
            marginTop: 15,
        },
        date:{
            color:'#fff',
            fontSize: 15,
            
        },
        source:{
            color:'#fff',
            fontSize: 15,
            marginTop: 20,
            borderTopColor: '#000',
            borderTopWidth: StyleSheet.hairlineWidth,
            paddingTop: 10,
        },
        url:{
            color:'#fff',
            fontSize: 15,
        },
        listImage:{
            width:'100%',
            height:200,
        }
    });
}