import * as React from 'react';
import Fb from './screens/Fb';
import In from './screens/In';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {StyleSheet} from 'react-native';


export default class App extends React.Component {
  render(){
    return(
    <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb:{screen:Fb},
  In:{screen:In},


});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
