import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MusicCard.style';

const MusicCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.music.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.music.title}</Text>
                <View style={styles.info_container}>
                    <Text>{props.music.artist}</Text>
                    <Text style={styles.year}>{props.music.year}</Text>
                </View>
            </View>
        </View>
    );
}

export default MusicCard;