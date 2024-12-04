import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import {width, FULL_CARD_HEIGHT, HALF_CARD_HEIGHT} from './Utils'
import DeckData from './DeckData.js'
import styles from '../assets/style'

const Card = (cardData, props) => {
    const cardHeight = (typeof(cardData.deckBackground) !== 'undefined' && cardData.deckBackground != null)
    ? (cardData.height == 'full'
        ? FULL_CARD_HEIGHT
        : HALF_CARD_HEIGHT)
    : ((cardData.type == 'card')
        ? FULL_CARD_HEIGHT
        : HALF_CARD_HEIGHT);

    const bottomPadding = (cardData.type == 'card') ? 0 : 20;

    const buildCard = () => {
        const img = (typeof(cardData.deckBackground) !== 'undefined' && cardData.deckBackground != null)
            ? DeckData.inst().getDeckImage(cardData.deckBackground)
            : null;
        return (
            <View style={[st.card,
                {height: cardHeight, width: width * 0.9, marginHorizontal: width * 0.05},
                styles[cardData.cardStyle]
            ]}
            >
                <ImageBackground
                    source={img}
                    imageStyle={{ borderRadius: 20}}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}>
                        <View style={st.top}>
                            <View style={st.cardHeader}>
                                <Text style={[st.deckName, styles[cardData.textStyle]]}>{cardData.deckName}</Text>
                                <Text style={[st.subText, styles[cardData.textStyle]]}>{cardData.subText}</Text>
                            </View>
                        </View>
                        <View style={st.middle}>
                            <Text style={[st.cardText, styles[cardData.textStyle]]}>{cardData.text}</Text>
                        </View>
                        <View style={[st.bottom, {paddingBottom: bottomPadding}]}>
                            <Text style={[st.footerText, st.footerTextLeft, styles[cardData.textStyle]]}>{cardData.info}</Text>
                            <Text style={[st.footerText, st.footerTextRight, styles[cardData.textStyle]]}>{cardData.moreInfo}</Text>
                        </View>
                </ImageBackground>
            </View>
        )
    };

    if(cardData.clickHandler != null)
        return (
            <Pressable style={st.deckVisible} onPress={() => cardData.clickHandler(cardData)}>
                {buildCard()}
            </Pressable>
        );
    else
        return buildCard()
};

export default Card;

const st = StyleSheet.create({
    card: {
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        maxWidth: 400,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 1, height: 1 },
        backgroundColor: 'white',
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'baseline',
        maxWidth: 400,
        paddingTop: 20,
    },
    middle: {
        flex: 8,
        justifyContent: 'center',
        alignContent: "center",
        width: "100%",
        maxWidth: 400,
        padding: 20,
        paddingTop: 0,
    },
    cardHeader:{
        alignItems: 'center',
    },
    deckName: {
        fontFamily: "DM Sans",
        fontSize: 20,
        flex: 2,
        textAlign: 'center',
        color: 'black',
    },
    subText: {
        fontFamily: "DM Sans",
        fontSize: 14,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        color: 'black',
    },
    cardText: {
        fontFamily: "DM Sans",
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
    },
    footerText: {
        fontFamily: "DM Sans",
        fontSize: 14,
        color: 'black',
        position: 'absolute',
    },
    footerTextLeft: {
        left: 15,
    },
    footerTextRight: {
        right: 15,
    },
});