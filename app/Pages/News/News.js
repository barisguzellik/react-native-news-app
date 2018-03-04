import React, { Component } from 'react';
import {View,
        Text,
        StatusBar,
        StyleSheet,
        ListView,
        TouchableOpacity,
        ActivityIndicator,
        Alert,
        RefreshControl,
        Modal,
        ToastAndroid,
        Platform
    } from 'react-native';

import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { NewsApi } from '../../Api/NewsApi/NewsApi';
import { Style } from './Style';

import SearchBar from '../../Components/SearchBar';

export default class News extends Component{
    constructor(props){
        super(props);

        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state={
            selectedCategory:props.selectedCategory,
            searchQuery:props.query,
            isSearch:false,
            isLoading:true,
            refreshing:false,
            dataSource:ds.cloneWithRows([]),
        }
    }
    
    componentDidMount(){

        this._getNewsApi();
    }

    _getNewsApi(){

        let apiConfig=NewsApi.apiConfig;
        let apiCountry=NewsApi.apiCountry.country;
        let apiEndPoint=NewsApi.apiEndPoints[0];

        var addCountry="country="+apiCountry;

        var addCategory=""; 
        var category=this.state.selectedCategory;
        if(category!=null){
            addCategory="&category="+category;
            Actions.refresh({title:this.props.selectedCategoryName});
        }

        var addQuery=""; 
        var query=this.state.searchQuery;
        if(query!=null){
            addCountry=null;
            addCategory=null;
            addQuery="&q="+query;
            apiEndPoint=NewsApi.apiEndPoints[1];
            Actions.refresh({title:this.props.query});
        }

        let fetchUri=apiConfig.apiBaseUrl+apiEndPoint+'?'+addCountry+addCategory+addQuery+'&apiKey='+apiConfig.apiKey;

        fetch(fetchUri,{
            method:'GET'
        })
            .then((res)=>res.json())
            .then((resJson)=>{
                this.setState({
                    isLoading:false,
                    refreshing:false,
                    dataSource: this.state.dataSource.cloneWithRows(resJson.articles),
                })
            })   
            .catch((err)=>{
                //alert(fetchUri);
                this.setState({
                    isLoading:false,
                });

                if(Platform.OS=='android'){
                   ToastAndroid.show("Code:" + err.toString(),2000);
                }

                
                //Actions.webView({'externalSource':'http://google.com','sourceTitle':'Google'});
                
            });
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._getNewsApi();
    }

    componentWillMount() {
        Actions.refresh({ right: this._renderRightButton});
    }

    _renderRightButton = () => {
        return(
            <View  style={{flexDirection:'row'}}>
                <TouchableOpacity  style={{flex:1}} onPress={() => this._handleSearchTouch() } >
                    <Icon name="search" size={22} color='#fff' style={{paddingRight:25}} />
                </TouchableOpacity>
                <TouchableOpacity  style={{flex:1}} onPress={() => this._handleIconTouch() } >
                    <Icon name="filter" size={22} color='#fff' style={{paddingRight:15}} />
                </TouchableOpacity>
            </View>
        );
    };


    _handleSearchTouch = () => {
        this.setState({
            isSearch:!this.state.isSearch,
        }); 
        
    }

    _handleIconTouch = () => {
        Actions.categoryModal();
    }

    
    render(){
        return(
            <View style={Style.Style.container}>
                <StatusBar backgroundColor='#000' barStyle='light-content' />
                {this.state.isLoading &&
                  <View style={Style.Style.loading}>
                      <ActivityIndicator size='large'/>
                  </View>
                }
                {this.state.isSearch &&
                    <SearchBar />
                }
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>
                        <TouchableOpacity onPress={()=>Actions.newsDetail(
                            {
                               title:item.title,
                               description:item.description,
                               url:item.url,
                               urlToImage:item.urlToImage,
                               publishedAt:item.publishedAt,
                               author:item.author,
                               sourceId:item.source.id,
                               sourceName:item.source.name
                            })
                            }>
                            <View style={Style.Style.listRow}>
                                <Image 
                                    source={{uri:item.urlToImage}} 
                                    indicator={Progress.Circle}
                                    indicatorProps={{
                                        borderWidth: 2,
                                        color: 'rgba(150, 150, 150, 1)',
                                    }}
                                    style={Style.Style.listImage} />
                                <Text style={Style.Style.listTitle}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    } 
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh.bind(this)}
                        />
                    }              
                />
            </View>
        )
    }   
}

