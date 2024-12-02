import React from 'react'
import { Dimensions, View, Pressable } from 'react-native'
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData'

// Screen dimensions
const { height, width } = Dimensions.get('window');

// Card dimensions
const HALF_CARD_HEIGHT = height * 0.25;

const DeckInfoScreen = ({route, navigation}) => {
    const { deckID } = route.params;
    const deckData = DeckData.inst().getDeck(deckID)

    const clickDeck = () => {
        navigation.navigate('Play',
            { deckID: deckID });
    };

    return (
        <View style={[styles.container,
            {
                shadowColor:'#000',
                shadowOpacity:0.3,
                shadowOffset:{width: 1, height: 1 }
            }
        ]}>
            <Card
                text={deckData.deckName}
                height={HALF_CARD_HEIGHT}
                width={width}
                info={"❤️ "+height}
                moreInfo={"💬 "+width}
                deckColor="white"
                clickHandler={clickDeck}
            />
        </View>
    )
}

export default DeckInfoScreen
