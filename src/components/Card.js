import React from 'react';
import { Text, View, Pressable, ImageBackground, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {calculateCardHeight, BG_SVG_1} from './Utils'
import DeckData from './DeckData.js'
import styles from '../assets/style'
import Markdown from 'react-native-markdown-display';

const Card = (cardData) => {
    const cardHeight = calculateCardHeight(cardData);

    const getShareableView = () => {
        return (
            <>
              <View style={[stl.top, stl.shotTop]}>
                <View style={[stl.cardHeader, stl.shotCardHeader]}>
                  <Text style={[stl.deckName, styles[cardData.deckTextStyle], stl.shotDeckName]}>{cardData.deckName}</Text>
                  <Text style={[stl.deckSubText, styles[cardData.deckSubTextStyle], stl.shotDeckSubText]}>{cardData.deckSubText}</Text>
                </View>
              </View>
              <View style={[stl.middle, stl.shotMiddle]}>
                <Text style={[stl.cardText, styles[cardData.cardTextStyle], stl.shotCardText]}>{cardData.text}</Text>
                <Text style={[stl.cardSubText, styles[cardData.cardSubTextStyle], stl.shotCardSubText]}>{cardData.subText}</Text>
                <View style={stl.shotCommentBox}></View>
              </View>
              <View style={[stl.bottom, stl.shotBottom]}>
                <Text style={[stl.footerText, stl.footerTextLeft, styles[cardData.infoTextStyleLeft], stl.shotFooterTextLeft]}>{cardData.infoLeft}</Text>
                <Text style={[stl.footerText, stl.footerTextRight, styles[cardData.infoTextStyleRight], stl.shotFooterTextRight]}>{cardData.infoRight}</Text>
              </View>
            </>
        );
    };

    const buildCard = () => {
        const img = (typeof(cardData.deckBackground) !== 'undefined' && cardData.deckBackground != null)
            ? DeckData.getDeckImage(cardData.deckBackground)
            : null;

        const cardContent = cardData.shareable == 'yes'
        ? ( getShareableView() )
        : (
            <>
                <View style={[stl.top]}>
                    {cardData.isFavourite == 'yes' ? (
                        <Image
                            source={require('../assets/images/like.png')}
                            style={stl.likeIcon}
                        />
                    ) : null}
                    <View style={[stl.cardHeader]}>
                        <Text style={[stl.deckName, styles[cardData.deckTextStyle]]}>{cardData.deckName}</Text>
                        <Text style={[stl.deckSubText, styles[cardData.deckSubTextStyle]]}>{cardData.deckSubText}</Text>
                    </View>
                </View>
                {cardData.useMarkdown == 'yes'
                ? (
                    <View style={stl.middle}>
                        {cardData.text && <Markdown style={styles[cardData.cardTextStyle]}>{cardData.text}</Markdown>}
                        {cardData.subText && <Markdown style={styles[cardData.cardSubTextStyle]}>{cardData.subText}</Markdown>}
                    </View>
                )
                : (
                    <View style={stl.middle}>
                        <Text style={[stl.cardText, styles[cardData.cardTextStyle]]}>{cardData.text}</Text>
                        <Text style={[stl.cardSubText, styles[cardData.cardSubTextStyle]]}>{cardData.subText}</Text>
                    </View>
                )}
                <View style={[stl.bottom]}>
                    <Text style={[stl.footerText, stl.footerTextLeft, styles[cardData.infoTextStyleLeft]]}>{cardData.infoLeft}</Text>
                    <Text style={[stl.footerText, stl.footerTextRight, styles[cardData.infoTextStyleRight]]}>{cardData.infoRight}</Text>
                </View>
            </>
        );

        return (
            <View style={[
                stl.card,
                styles.shadow,
                styles[cardData.cardStyle],
                cardHeight == 'full' ? stl.cardFull : stl.cardHalf,
            ]}>
                {img
                ? (
                    <ImageBackground source={img} imageStyle={{ borderRadius: 30}} style={{ height: '100%', width: '100%' }}>
                        {cardContent}
                    </ImageBackground>)
                : ( cardContent )}
            </View>
        );
    };

    if(cardData.clickHandler != null)
        return (
            <Pressable style={stl.deckVisible} onPress={() => cardData.clickHandler(cardData)}>
                {buildCard()}
            </Pressable>
        );
    else
        return buildCard()
};

export default Card;

const stl = EStyleSheet.create({
    card: {
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        margin: 0,
        padding: 0,
        backgroundColor: 'white'
    },
    cardFull: {
        width: 353,
        height: 570
    },
    cardHalf: {
        width: 353,
        height: 260
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'baseline',
        position: 'relative',
        paddingTop: 20,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    middle: {
        flex: 4,
        justifyContent: 'center',
        alignContent: "center",
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: 0,
    },
    cardHeader:{
        alignItems: 'center',
    },
    deckName: {
        fontFamily: "DMSans-Regular",
        fontSize: 20,
        flex: 2,
        textAlign: 'center',
        color: 'black',
        width: '100%'
    },
    deckSubText: {
        fontFamily: "DMSans-Regular",
        fontSize: 14,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '100%',
        color: 'black',
    },
    cardText: {
        fontFamily: "DMSans-Regular",
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        width: '100%',
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
    cardSubText: {
        fontFamily: "DMSans-Regular",
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
    },
    footerText: {
        fontFamily: "DMSans-Regular",
        color: 'black',
        fontSize: 14,
        position: 'absolute',
    },
    footerTextLeft: {
        left: 15,
    },
    footerTextRight: {
        right: 15,
    },
    likeIcon: {
        width: 48,
        height: 48,
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1
    },


    shotTop: {
        backgroundColor: 'transparent',
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
        backgroundColor: 'transparent',
        fontFamily: "DMSans-Bold",
        textAlign: 'center',
        color: '#000',
    },
    shotDeckSubText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#666',
        marginTop: 5,
    },
    shotMiddle: {
        backgroundColor: 'transparent',
        padding: 20,
        paddingTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 4,
        width: '100%',
    },
    shotCardText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#000',
    },
    shotCardSubText: {
        backgroundColor: 'transparent',
        color: '#000',
        marginTop: 20,
    },
    shotCommentBox: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 30,
        padding: 10,
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    shotBottom: {
        backgroundColor: 'transparent',
        flex: 0.1,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    shotFooterTextLeft: {
        color: '#666',
    },
    shotFooterTextRight: {
        color: '#666',
    },
});