import React,{ Component } from 'react';
import { View, Text, ListView, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Categories from '../../Api/NewsApi/Category.json';

export default class CategoryModal extends Component{

    constructor(props){
        super(props);

        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        
        this.state={
            dataSource:ds.cloneWithRows([]),
        }
    }

    componentDidMount(){

        var arr=Categories;

        this.setState({
                dataSource: this.state.dataSource.cloneWithRows(arr),
        })

    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#000'}}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>
                        <TouchableOpacity onPress={()=>{
                            Actions.news({'selectedCategory':item.key,'selectedCategoryName':item.value});
                        }}>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    {item.value}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    } 
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    row:{
        width:'100%',
        padding:10,
        borderBottomColor: '#bbb',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    text:{
        width:'100%',
        color:'#fff',
        fontSize: 20,
        marginLeft: 30,
    }
});