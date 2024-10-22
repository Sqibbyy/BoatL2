import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Boat = ({ name, model, year, price, image }) => {
    return (
        <View style={styles.boatContainer}>
            {/* Image of the Boat */}
            <Image source={image} style={styles.boatImage} />
            {/* Boat Details */}
            <View style={styles.boatDetails}>
                <Text style={styles.boatName}>{name}</Text>
                <Text>Model: {model}</Text>
                <Text>Year: {year}</Text>
                <Text>Price: ${price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    boatImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    boatDetails: {
        justifyContent: 'center',
    },
    boatName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Boat;
