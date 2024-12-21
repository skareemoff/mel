import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $containerColor: '#FBF7EF',
    $mainLogoWidth: 111,
    $mainLogoHeight: 50,
    $headerTopPadding: 60,
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
        shadowOpacity:0.5,
        shadowOffset:{width: 2, height: 2 }
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
    deck1: {
        color: 'white',
        fontFamily: 'DMSans-Bold',
    },
    deck2: {
        color: 'white',
        fontFamily: 'DMSans-Bold'
    },
    deck3: {
        color: 'white',
        fontFamily: 'DMSans-Bold'
    },
    deck4: {
        color: 'darkgreen',
        fontFamily: 'DMSans-Bold'
    },
    deck5: {
        color: 'white',
        fontFamily: 'DMSans-Bold'
    },
    deck6: {
        fontFamily: 'DMSans-Bold',
        color: '#53B0CF',
    },
    favDeck: {
        fontFamily: 'DMSans-Bold',
        color: 'white',
    },
    favSubText: {
        color: 'white',
    },
    qODCard: {
        backgroundColor: '#FFE770',
    },
    qODCardText: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: '1.5rem',
        lineHeight: '1.75rem',
    },
    qODDeckText: {
        fontFamily: "DMMono-Regular",
        fontWeight: '400',
        fontSize: '0.875rem',
    },
    specialCardDeckTextStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardDeckSubTextStyle: {
        backgroundColor: 'black',
        color: 'white'

    },
    specialCardTextStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardSubTextStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardInfoTextStyleLeft: {
        backgroundColor: 'black',
        color: 'white'
    },
    specialCardInfoTextStyleRight: {
        backgroundColor: 'black',
        color: 'white'
    },
    exampleInfoTextStyleRight: {
        color: 'black',
        fontWeight: '500'
    },
    shareableCard: {
        marginRight: 150,
    },
    shareableInfoLeft: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center'
    },
    deckTitle: {
        marginBottom: -10,
    },
    deckInfoText: {
        fontSize: 16,
    },
    deckInfoCard: {
    },
    deckInfoDescription: {
        body: {
            fontFamily: "DMSans-Regular",
            margin: 20,
            backgroundColor: '#FBF7EF',
        },
        blockquote: {
            fontFamily: "DMSans-Regular",
            paddingLeft: 10,
            fontWeight: 600,
            fontSize: 16,
            borderLeftWidth: 7,
            borderLeftColor: "red",
            backgroundColor: '#FBF7EF',
        },
    },
    deckInfoRules: {
        heading3: {
            color: "black",
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'DMSans-Bold'
        },
        heading5: {
            fontFamily: "DMSans-Regular",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DMSans-Regular",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DMSans-Regular",
            fontSize: 16,
            borderLeftWidth: 0,
            borderLeftColor: "red",
            padding: 20,
            backgroundColor: '#FBF7EF',
        },
        ordered_list:{
            counterReset: 'item',
            listStyleType: 'upper-roman',
            lineHeight: 26,
            backgroundColor: '#FBF7EF',
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
            fontFamily: 'DMSans-Bold',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 22,
            lineHeight: "0",
        },
        bullet_list: {
            padding: 10,
            lineHeight: 24,
        },
        body: {
            fontFamily: "DMSans-Regular",
            margin: 20,
            paddingLeft: 10,
            backgroundColor: '#FBF7EF',
        }
    },
    onboardingDeckText: {
        color: "transparent"
    },
    onboardingText: {
        heading1: {
            flexDirection: 'column',
            fontFamily: "DMSans-Regular",
            color: "black",
            textAlign: 'lefyt',
            fontSize: 40,
            fontWeight: 400,
            marginBottom: 20
        },
        heading2: {
            fontFamily: "DMSans-Regular",
            marginBottom: 20,
            fontWeight: 600,
            fontSize: 40,
            textAlign: 'center',
            color: 'black'
        },
        heading3: {
            fontFamily: "DMSans-Regular",
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 500,
            fontSize: 20,
            textAlign: 'left',
            color: 'black'
        },
        heading4: {
            fontFamily: "DMSans-Regular",
            marginTop: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'left',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DMSans-Regular",
            fontSize: 16,
            backgroundColor: '#FBF7EF',
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
            fontFamily: 'DMSans-Bold',
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
            fontFamily: "DMSans-Regular",
            margin: 20,
            marginBottom: 40,
            marginTop: 40
        }
    }
});