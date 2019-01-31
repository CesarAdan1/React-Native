import React from 'react';
import { View, Text } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';


const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>     
    );
}

export default AlbumDetail; 