import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            changedText:'',
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <View style={styles.bar}>
                <TextInput
                onChangeText={(txt)=>{
                    this.setState({
                        changedText:txt,
                    });
                }}
                onEndEditing={()=>{
                    Actions.news({query:this.state.changedText});
                }}
                autoFocus
                placeholder="Search..."
                placeholderTextColor="#ccc"
                style={styles.text}
                 />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    bar:{
        width:'100%',
        padding:5,
    },
    text:{
        width:'100%',
        paddingHorizontal: 10,
        color:'#fff'
    },
});
