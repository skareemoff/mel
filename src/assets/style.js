import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export const HALF_CARD_HEIGHT = 260;
export const { height, width } = Dimensions.get('window');

EStyleSheet.build({
    $containerColor: 'white',
    $mainLogoWidth: 111,
    $mainLogoHeight: 50,
    $headerTopPadding: 60,
    $logoOffset: -100,
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
    logo: {
        top: '$headerTopPadding',
        width: '$mainLogoWidth',
        height: '$mainLogoHeight',
        backgroundColor: 'transparent',
    },

    deckIce: {
        color: 'black',
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
    favDeck: {
        fontFamily: 'DMMono-Regular',
    },
    favSubText: {
        fontFamily: 'DMMono-Regular',
        color: 'black',
        width: '100%',
        fontSize: 14,
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
    qODInfoTextLeft: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: 14,
        color: '#4B677D',
        left: 35,
    },
    qODInfoTextRight: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: 14,
        color: '#4B677D',
        right: 35,
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
    specialCardInfoTextStyleLeft: {
        fontFamily: "DMMono-Regular",
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
    specialCardInfoTextStyleRight: {
        color: 'white'
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
    exampleInfoLeft: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
    deckTextStyle: {
        fontFamily: "DMSans",
        fontWeight: 400,
        fontSize: 24,
    },
    deckInfoDescription: {
        body: {
            fontFamily: "DMSans",
            backgroundColor: 'transparent',
        },
        blockquote: {
            fontFamily: "DMSans",
            fontWeight: 400,
            fontSize: 24,
            paddingLeft: 10,
            marginLeft: 30,
            marginRight: 30,
            borderLeftWidth: 10,
            borderLeftColor: '#00BC38',
            backgroundColor: 'transparent',
        },
    },
    deckInfoRules: {
        heading3: {
            color: "black",
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 24,
            lineHeight: 28,
            fontWeight: 400,
            fontFamily: 'DMSans'
        },
        heading5: {
            fontFamily: "DMSans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DMSans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black',

        },
        blockquote: {
            fontFamily: "DMSans",
            fontSize: 16,
            borderLeftWidth: 0,
            borderLeftColor: "red",
            padding: 20,
            backgroundColor: '$containerColor',

        },
        ordered_list:{
            counterReset: 'item',
            listStyleType: 'upper-roman',
            lineHeight: 26,
            backgroundColor: '$containerColor',
        },
        ordered_list_icon: {
            marginRight: 20,
            marginBottom: 20,
            backgroundColor: "#EEEEEE",
            color: "black",
            width: 42,
            height: 42,
            paddingTop: 10,
            paddingLeft: 10,
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 400,
            fontFamily: 'DMMono-Regular',
            fontSize: 16,
            lineHeight: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bullet_list: {
            padding: 10,
            lineHeight: 24,
        },
        body: {
            fontFamily: "DMSans",
            margin: 20,
            paddingLeft: 10,
            backgroundColor: 'transparent',
            marginLeft: 30,
            marginRight: 30,

        }
    },




    onboardingDeckText: {
        color: "transparent"
    },
    onboardingText: {
        heading1: {
            flexDirection: 'column',
            fontFamily: "DMSans",
            color: "black",
            textAlign: 'lefyt',
            fontSize: 40,
            fontWeight: 400,
            marginBottom: 20
        },
        heading2: {
            fontFamily: "DMSans",
            marginBottom: 20,
            fontWeight: 600,
            fontSize: 40,
            textAlign: 'center',
            color: 'black'
        },
        heading3: {
            fontFamily: "DMSans",
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 500,
            fontSize: 20,
            textAlign: 'left',
            color: 'black'
        },
        heading4: {
            fontFamily: "DMSans",
            marginTop: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'left',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DMSans",
            fontSize: 16,
            backgroundColor: '$containerColor',
            borderLeftWidth: 0,
            borderLeftColor: "red",
            padding: 20
        },
        ordered_list:{
            counterReset: 'item',
            listStyleType: 'upper-roman',
            lineHeight: 26,
        },
        ordered_list_icon: {
            marginRight: 20,
            marginBottom: 20,
            backgroundColor: "#B4B9A2",
            color: "white",
            width: "30",
            height: "30",
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: 'DMSans',
            fontSize: 22,
            lineHeight: "0",
        },
        bullet_list: {
            margin: 0,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 16,
            padding: 0,
            lineHeight: 24,
        },
        list_item: {
            marginTop: 16
        },
        body: {
            fontFamily: "DMSans",
            margin: 20,
            marginBottom: 40,
            marginTop: 40
        }
    }
});