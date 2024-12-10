import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from 'react-native';
import {width, FULL_CARD_HEIGHT, HALF_CARD_HEIGHT} from './Utils'
import DeckData from './DeckData.js'
import styles from '../assets/style'
import Markdown from 'react-native-markdown-display';

const Card = (cardData, props) => {
    const cardHeight = (typeof(cardData.height) !== 'undefined' && cardData.height != null)
    ? (cardData.height == 'full' ? FULL_CARD_HEIGHT : HALF_CARD_HEIGHT)
    : ((cardData.type == 'card') ? FULL_CARD_HEIGHT : HALF_CARD_HEIGHT);

    const bottomPadding = (cardData.type == 'card') ? 0 : 0;

    const getShareableView = () => {
        return (
            <>
              <View style={[st.top, st.shotTop]}>
                <View style={[st.cardHeader, st.shotCardHeader]}>
                  <Text style={[st.deckName, styles[cardData.deckTextStyle], st.shotDeckName]}>{cardData.deckName}</Text>
                  <Text style={[st.deckSubText, styles[cardData.deckSubTextStyle], st.shotDeckSubText]}>{cardData.deckSubText}</Text>
                </View>
              </View>
              <View style={[st.middle, st.shotMiddle]}>
                <Text style={[st.cardText, styles[cardData.cardTextStyle], st.shotCardText]}>{cardData.text}</Text>
                <Text style={[st.cardSubText, styles[cardData.cardSubTextStyle]]}>{cardData.subText}</Text>
                <View style={st.shotCommentBox}></View>
              </View>
              <View style={[st.bottom, st.shotBottom, {paddingBottom: bottomPadding}]}>
                <Text style={[st.footerText, st.footerTextLeft, styles[cardData.infoTextStyleLeft], st.shotFooterTextLeft]}>{cardData.infoLeft}</Text>
                <Text style={[st.footerText, st.footerTextRight, styles[cardData.infoTextStyleRight], st.shotFooterTextRight]}>{cardData.infoRight}</Text>
              </View>
            </>
        );
    };

    const buildCard = () => {
        const img = (typeof(cardData.deckBackground) !== 'undefined' && cardData.deckBackground != null)
            ? DeckData.getDeckImage(cardData.deckBackground)
            : null;

        const cardContent = cardData.shareable == 'yes' ? (
            getShareableView()
        ) : (
            <>
                <View style={[st.top, { position: 'relative' }]}>
                    {cardData.isFavourite == 'yes' ? (
                        <Image
                            source={require('../assets/images/like.png')}
                            style={{ width: 48, height: 48, position: 'absolute', top: 20, right: 20, zIndex: 1 }}
                        />
                    ) : null}
                    <View style={[st.cardHeader, { width: '100%' }]}>
                        <Text style={[st.deckName, styles[cardData.deckTextStyle]]}>{cardData.deckName}</Text>
                        <Text style={[st.deckSubText, styles[cardData.deckSubTextStyle]]}>{cardData.deckSubText}</Text>
                    </View>
                </View>
                {cardData.useMarkdown == 'yes' ? (
                    <View style={st.middle}>
                        {cardData.text && <Markdown style={styles[cardData.cardTextStyle]}>{cardData.text}</Markdown>}
                        {cardData.subText && <Markdown style={styles[cardData.cardSubTextStyle]}>{cardData.subText}</Markdown>}
                    </View>
                ) : (
                    <View style={st.middle}>
                        <Text style={[st.cardText, styles[cardData.cardTextStyle]]}>{cardData.text}</Text>
                        <Text style={[st.cardSubText, styles[cardData.cardSubTextStyle]]}>{cardData.subText}</Text>
                    </View>
                )}
                <View style={[st.bottom, {paddingBottom: bottomPadding}]}>
                    <Text style={[st.footerText, st.footerTextLeft, styles[cardData.infoTextStyleLeft]]}>{cardData.infoLeft}</Text>
                    <Text style={[st.footerText, st.footerTextRight, styles[cardData.infoTextStyleRight]]}>{cardData.infoRight}</Text>
                </View>
            </>
        );

        return (
            <View style={[st.card,
                {height: cardHeight, width: width * 0.9, marginHorizontal: width * 0.05},
                styles[cardData.cardStyle]
            ]}>
                {img ? (
                    <ImageBackground
                        source={img}
                        imageStyle={{ borderRadius: 20}}
                        style={{
                            height: '100%',
                            width: '100%',
                        }}>
                        {cardContent}
                    </ImageBackground>
                ) : (
                    cardContent
                )}
            </View>
        );
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
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2 },
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
        flex: 4,
        justifyContent: 'center',
        alignContent: "",
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
        width: '100%'
    },
    deckSubText: {
        fontFamily: "DM Sans",
        fontSize: 14,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '100%',
        color: 'black',
    },
    cardText: {
        fontFamily: "DM Sans",
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    cardSubText: {
        fontFamily: "DM Sans",
        fontSize: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '100%',
        color: 'black',
        marginTop: 20,
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

    shotTop: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 5,
        flex: 0.5,
    },
    shotCardHeader: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    shotDeckName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    shotDeckSubText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginTop: 5,
    },
    shotMiddle: {
        padding: 20,
        paddingTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 4,
        width: '100%',
    },
    shotCardText: {
        fontSize: 28,
        textAlign: 'center',
        color: '#000',
    },
    shotCardSubText: {
        marginTop: 20,
    },
    shotCommentBox: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    shotBottom: {
        flex: 0.1,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    shotFooterTextLeft: {
        fontSize: 12,
        color: '#666',
    },
    shotFooterTextRight: {
        fontSize: 12,
        color: '#666',
    },
});