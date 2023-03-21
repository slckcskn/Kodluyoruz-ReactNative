import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MusicCard.styles';

const MusicCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.music.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.music.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{props.music.artist}</Text>
                        <Text style={styles.year}>{props.music.year}</Text>
                    </View>

                    {props.music.isSoldOut && (<View style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>TÜKENDİ</Text>
                    </View> )}
                </View>
            </View>
        </View>
    );
}

export default MusicCard;