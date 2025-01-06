import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../style'
import cstl from '../cardStyle'
import {MELContext} from '../MELContext'
import {CARD_HALF} from "../Utils"

const MiniCard = (cardData) => {
    const {dd} = React.useContext(MELContext);

    return (
        <View style={[
            cstl.card,
            styles.shadow,
            stl[cardData.cardStyle],
            cardData.height == 'half' ? stl.cardHalf : stl.cardMini,
        ]}>
            { cardData.deckBackgroundSvg &&
                <SvgXml xml={dd.getDeckImageSvg(cardData.deckBackgroundSvg, CARD_HALF)}
                    width='100%'
                    height='100%'
                    style={{
                        position: 'absolute',
                        borderRadius: 30,
                        zIndex: 0,
                        overflow: 'hidden',
                        backgroundColor: cardData.deckBackgroundColor
                    }}
                />
            }
            <View style={[cstl.top]}>
                <View style={[cstl.cardHeader]}>
                    <Text style={stl[cardData.styleDeckName]}>{cardData.deckName}</Text>
                    {cardData.deckSubText && <Text style={stl[cardData.styleDeckSubText]}>{cardData.deckSubText}</Text>}
                </View>
            </View>
            <View style={cstl.middle}>
                <Text style={stl[cardData.styleCardText]}>{cardData.text}</Text>
                {cardData.subText && <Text style={stl[cardData.styleCardSubText]}>{cardData.subText}</Text>}
            </View>
            <View style={[cstl.bottom]}>
                <Text style={[stl[cardData.styleFooterText], stl.footerTextLeft]}>{cardData.infoLeft}</Text>
                <Text style={[stl[cardData.styleFooterText], stl.footerTextRight]}>{cardData.infoRight}</Text>
            </View>
        </View>
    );
};

export default MiniCard;

const stl = EStyleSheet.create({
    cardMini: {
        width: 210,
        height: 154.77,
        backgroundColor: 'transparent',
    },
    cardHalf: {
        width: '$cardWidth',
        height: '$cardHeightHalf',
        backgroundColor: 'black',
        color: 'white',
        alignSelf: 'center'
    },
    miniCard1: {
        position: 'absolute',
        top: 223.13,
        left: 23,
        transform: [{rotateZ: '-23.3deg'}],
        zIndex: 4
    },
    miniCard2: {
        position: 'absolute',
        top: 100.98,
        left: 33,
        transform: [{rotateZ: '-60deg'}],
        zIndex: 3
    },
    miniCard3: {
        position: 'absolute',
        top: 164.41,
        left: 130.39,
        transform: [{rotateZ: '-30deg'}],
        zIndex: 2
    },
    miniCard4: {
        position: 'absolute',
        top: 251,
        left: 175,
        zIndex: 1
    },
    deckName1: {
        fontFamily: "DMSans",
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 22,
        color: 'white',
        textAlign: 'center',
    },


    deckName: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: 14,
        color: '#6F6F6F',
        flex: 2,
        textAlign: 'center',
        width: '100%'
    },
    deckSubText: {
        fontFamily: "DMSans",
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
        color: 'white',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 28,
        textAlign: 'center',
        width: '100%',
    },
    cardSubText: {
        fontFamily: "DMSans",
        fontSize: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '100%',
        color: 'white',
        marginTop: 20,
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'transparent'
    },
    footerText: {
        fontFamily: "DMMono-Regular",
        color: '#6F6F6F',
        fontSize: 14,
        position: 'absolute',
    },
    footerTextLeft: {
        top: -10,
        left: 35,
    },
    footerTextRight: {
        top: -10,
        right: 35,
    },
});
