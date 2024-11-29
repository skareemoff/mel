import React from 'react'
import { StyleSheet, Dimensions, View, Pressable } from 'react-native'
import Card from './Card';

// Screen dimensions
const { height, width } = Dimensions.get('window');

// Card dimensions
const HALF_CARD_HEIGHT = height * 0.25;

const DeckInfoScreen = ({route, navigation}) => {
    const { deckID } = route.params;
    const deckAndCardData = require('../data/cards.json');
    const deckData = deckAndCardData.decks.filter(item => item.id == deckID)[0]

    const clickDeck = () => {
        navigation.navigate('Play',
            { deckID: deckID });
    };

    return (
        <View style={styles.container}>
            <Card
                text={deckData.deckName}
                height={HALF_CARD_HEIGHT}
                width={width}
                info={"❤️ "+height}
                moreInfo={"💬 "+width}
                deckColor="lightblue"
                clickHandler={clickDeck}
            />
        </View>
    )
}

export default DeckInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F8C0'
    },
    card: {
        justifyContent: 'center',
        backgroundColor: 'cornflowerblue',
        borderColor: "#51A8EF",
        borderWidth: 1,
        height: "30%",
        marginTop: 60,
        marginBottom: 60,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 30,
        padding: 10
    },
    text: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'auto'
    }
});