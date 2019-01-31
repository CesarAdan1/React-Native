import React, { Component } from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';


const estilos = {
    backgroundColor:'white',
    height: '100%',
    width: '100%'
}

 class App extends Component {
  render() {
    return (
      <View style={estilos}> 
        <Header 
          header={'Albums'}
        />
        <AlbumList />
      </View>
    )
  }
}

export default App;

AppRegistry.registerComponent('albums', () => App);
