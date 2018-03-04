
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Router, Scene, Modal } from 'react-native-router-flux';

import News from './app/Pages/News/News';
import NewsDetail from './app/Pages/NewsDetail/NewsDetail';
import Category from './app/Components/Modals/Category';
import webView from './app/Pages/WebView/WebView';

import  Icon  from 'react-native-vector-icons/FontAwesome';

console.disableYellowBox=true;

export default class App extends Component {
  render() {
    return (
      
      <Router navigationBarStyle={{backgroundColor:'#000'}} titleStyle={{color:'#fff'}} navBarButtonColor='#fff'>
        
        <Scene key="root">
          
          <Scene key="news"
          component={News}
          title="Top"
          initial
          />
          
          <Scene key="newsDetail"
          component={NewsDetail}
          title=""
          />

          <Scene key="categoryModal"
            component={Category}
            title="Categories"
            hideNavBar={false}
          />

            <Scene key="webView"
            component={webView}
            title="Source..."
            hideNavBar={false}
          />

        </Scene>
      </Router>
    );
  }
}

