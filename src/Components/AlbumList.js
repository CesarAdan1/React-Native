import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const styles = {
    backgroundColor: "white",
    color: 'black', 
}

class AlbumList extends Component {
    //class level property, component level state
    state = {
        albums: [],
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => this.setState({ albums: response.data 
                }));
    }
//Create the method
    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

  render() {
      console.log(this.state);
    return (
    <View 
        style={styles}
    >
        {/*//Put the state*/}
        {this.renderAlbums()}
    </View>
    )
  }
}

export default AlbumList;