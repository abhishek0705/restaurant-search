import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const navigator = createStackNavigator({
  Search : SearchScreen,
  ResultsShow:ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Restaurant Search',
  }
});

export default createAppContainer(navigator);
//3158898eccd21ed525b4af3eaa4fb8f8 ZOMATO API Key
//Yelp API
//Client Id-  Y-SVKucs1QsicgZ-CJqOA
//API Key- l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx

