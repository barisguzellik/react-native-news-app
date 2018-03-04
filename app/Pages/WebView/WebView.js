import React,{Component} from 'react';
import { View,WebView,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class webView extends Component{

    constructor(props){
        super(props);
        this.state={
            webSource:props.externalSource,
            sourceTitle:props.sourceTitle,
        }
    }

    componentDidMount(){
        Actions.refresh({title:this.state.sourceTitle});
    }

    render(){
        return(
            <View style={styles.container}>
                <WebView style={styles.webView}
                source={{uri: this.state.webSource}}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    webView:{
        flex:1,
    }
});