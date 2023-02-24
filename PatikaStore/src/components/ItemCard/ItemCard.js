import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ItemCard.style';

const ItemCard = ({ items }) => {
    // console.log(props);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: items.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{items.title}</Text>
                <Text style={styles.description}>{items.price}</Text>
                <Text style={styles.author}>{items.inStock.toString()}</Text>
            </View>

        </View>
    );
}

export default ItemCard;