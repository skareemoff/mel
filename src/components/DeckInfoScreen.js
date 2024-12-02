import React from 'react'
import { Dimensions, View } from 'react-native'
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
                type='deck'
                text={deckData.deckName}
                deckBackground={deckData.deckBackground}
                info={"❤️ "+height}
                moreInfo={"💬 "+width}
                clickHandler={clickDeck}
            />
        </View>
    )
}

export default DeckInfoScreen
