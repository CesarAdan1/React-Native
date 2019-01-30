import { Text, AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <View>
        <Header 
        header={'Albums'}
        />
      </View>
    )
  }
}
export default App;

AppRegistry.registerComponent('albums', () => App);
