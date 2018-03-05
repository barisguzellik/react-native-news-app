import React, { Component } from 'react';
import {View,
    Text,
    StatusBar,
    StyleSheet,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    WebView,
    Modal,
    TouchableHighlight,
    Linking,
    ScrollView
} from 'react-native';

import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {Style} from './Style';

export default class NewsDetail extends Component{

    constructor(props){
        super(props);

        this.state={
            isLoading:false,
            modalVisible:false,
            dataSource:{
                source:{
                    id:props.sourceId,
                    name:props.sourceName
                },
                author:props.author,
                title:props.title,
                description:props.description,
                url:props.url,
                urlToImage:props.urlToImage,
                publishedAt:props.publishedAt
            },
        }

        Actions.refresh({title:this.state.dataSource.title});
    }

    componentDidMount(){

        //alert(this.props.itemId);
    }

    

    render(){
        return(
            <ScrollView style={Style.Style.container}>
                {this.state.isLoading &&
                  <View style={Style.Style.loading}>
                      <ActivityIndicator size='large'/>
                  </View>
                }
                
                <Image 
                    source={{uri:this.state.dataSource.urlToImage}} 
                    indicator={Progress.Circle}
                    indicatorProps={{
                            borderWidth: 2,
                            color: 'rgba(150, 150, 150, 1)',
                    }}
                    style={Style.Style.listImage} />
                <View style={{padding:10}}>
                    <Text style={Style.Style.listTitle}>
                        {this.state.dataSource.title}
                    </Text>
                    <Text style={Style.Style.listDesc}>
                        {this.state.dataSource.description}
                    </Text>
                    
                    <Text style={Style.Style.source}>
                        {this.state.dataSource.author}
                    </Text>
                    <TouchableHighlight onPress={() => {
                        Actions.webView({'externalSource':this.state.dataSource.url,'sourceTitle':this.state.dataSource.author})
                    }}>
                        <Text style={Style.Style.url}>
                            <Icon name='link' size={15} color='#fff' />  Details
                        </Text>
                    </TouchableHighlight>
                    

                </View>
            </ScrollView>
        )
    }   
}
