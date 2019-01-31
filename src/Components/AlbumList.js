import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const styles = {
    backgroundColor: "white",
    color: 'black', 
}

class AlbumList extends Component {
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums#')
            .then(response => console.log(response))
    }

  render() {
    return (
    <View style={styles}>
        <Text>Album List</Text>
    </View>
    )
  }
}

export default AlbumList;