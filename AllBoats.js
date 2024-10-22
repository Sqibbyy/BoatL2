import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Boat from './Boat';

// Import images
const boatImages = {
    bayliner: require('./img/bayliner.jpg'),
    fairline: require('./img/fairline.jpg'),
    flipper: require('./img/flipper.jpg'),
    fourWinns: require('./img/four_winns.jpg'),
    princess: require('./img/princess.jpg'),
    seaRay: require('./img/sea_ray.jpg'),
};

// Updated boat data with descriptions and images
const boatsData = [
    {
        name: 'Sea Ray 500 Sundancer',
        description:
            'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        image: boatImages.seaRay,
    },
    {
        name: 'Four Winns Horizon 180',
        description:
            'A sporty look and refined details truly set the Horizon 180 above all others.',
        image: boatImages.fourWinns,
    },
    {
        name: 'Flipper 640 ST',
        description:
            'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        image: boatImages.flipper,
    },
    {
        name: 'Princess V48',
        description:
            'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
        image: boatImages.princess,
    },
    {
        name: 'Bayliner 175 Bowrider',
        description:
            'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        image: boatImages.bayliner,
    },
    {
        name: 'Fairline Targa 47',
        description:
            'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        image: boatImages.fairline,
    },
];

const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {boatsData.map((boat, index) => (
                <Boat
                    key={index}
                    name={boat.name}
                    description={boat.description}
                    image={boat.image}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default AllBoats;
