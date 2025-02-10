import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export const HALF_CARD_HEIGHT = 260;
export const { height, width } = Dimensions.get('window');

EStyleSheet.build({
    $containerColor: 'white',
    $mainLogoWidth: 111,
    $mainLogoHeight: 50,
    $headerTopPadding: 60,
    $cardHeightFull: 570,
    $cardHeightHalf: HALF_CARD_HEIGHT,
    $cardWidth: 353,
    $sideMargin: '(width - $cardWidth)/2'
});

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$containerColor',
    },
    flatList: {
        backgroundColor: '$containerColor',
    },
    flatListItem: {
        top: '$headerTopPadding'
    },
    shadow: {
        shadowColor:'#000',
        shadowOpacity:0.17,
        shadowOffset:{width: 0, height: 0 },
        shadowRadius: 54
    },
    appbarBottom: {
        backgroundColor: '$containerColor',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: -100,
        display: 'flex',
        height: 84,
    },
    smallButtonSize: {
        width: 32,
        height: 32,
    },

    deckIce: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'DMSans',
    },
    deckConfes: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'DMSans',
    },
    deckDeep: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'DMSans',
    },
    deckEOY: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'DMSans',
    },
    deckConnect: {
        color: 'white',
        fontWeight: 700,
        fontFamily: 'DMSans',
    },
    deckTiny: {
        fontWeight: 700,
        fontFamily: 'DMSans',
        color: 'black',
    },
    favDeckHidden: {
        color: 'transparent'
    },
    favDeck: {
        fontFamily: 'DMMono-Regular',
    },
    favSubText: {
        fontFamily: 'DMMono-Regular',
        color: 'white',
        width: '100%',
        fontSize: 14,
        lineHeight: 18,
        top: 60,
        backgroundColor: 'transparent'
    },

    qODCard: {
        backgroundColor: '#F9F9F9',
    },
    qODCardText: {
        fontFamily: "DMSans",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
    },
    qODDeckText: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: 14,
        color: '#4B677D',
    },
    qODInfoTextRight: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: 14,
        color: '#4B677D',
        right: 35,
        position: 'absolute',
        backgroundColor: 'transparent',
    },

    exampleDeckTitle: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 14,
    },
    exampleDeckText: {
        fontFamily: "DMSans-Regular",
        color: '#4B677D',
        fontSize: 24,
        lineHeight: 28,
    },
    exampleInfoRight: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 14,
        width: '100%',
        textAlign: 'center',
    },

    specialCardDeckTextStyle: {
        color: 'white'
    },
    specialCardDeckSubTextStyle: {
        color: 'white'

    },
    specialCardTextStyle: {
        color: 'white'
    },
    specialCardSubTextStyle: {
        color: 'white'
    },
    specialCardStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardInfoTextStyleRight: {
        fontFamily: "DMMono-Regular",
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        width: '100%',
        textAlign: 'center',
        right: 0
    },

    playInfoText: {
        fontFamily: "DMMono-Regular",
        color: '#6F6F6F',
        fontWeight: '400',
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
});