import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import SearchData from './features/search/search'
import { Provider } from 'react-redux';
import store from './STORE/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Result from './features/result/result';
const Stack = createStackNavigator();


export default class App extends React.Component {
    render () {
      return (
        <Provider store = {store}>
         <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Search" component={SearchData} />
              <Stack.Screen name="Display" component={Result} />
          </Stack.Navigator>
         </NavigationContainer>          
          {/* <SearchData /> */}
        </Provider>
        
      );
    }
}