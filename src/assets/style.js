import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF7EF',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },
    flatList: {
        backgroundColor: '#FBF7EF',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    appbarBottom: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: 400,
        backgroundColor: 'transparent',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
    },
    roundButton: {
        borderRadius: "50%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft: 20,
        marginRight: 20,
      },
      roundButtonImage: {
        height: 60,
        width: 60,
    },
    largeButton: {
        borderRadius: "20%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 10,
    },
    largeButtonImage: {
        height: 60,
        width: 140,
    },
    deck1: {
        color: 'white',
        fontWeight: 'bold',
    },
    deck2: {
        color: 'white',
        fontWeight: 'bold'
    },
    deck3: {
        color: 'white',
        fontWeight: 'bold'
    },
    deck4: {
        color: 'darkgreen',
        fontWeight: 'bold'
    },
    deck5: {
        color: 'white',
        fontWeight: 'bold'
    },
    deck6: {
        fontFamily: "Comic",
        fontWeight: 'bold',
        color: '#53B0CF',
    },
    deckFavs: {
        fontFamily: "Comic",
        fontWeight: 'bold',
        color: 'white',
    },
    qODCard: {
        backgroundColor: '#FFE770',
    },
    qODCardText: {
        color: '#4B677D',
        fontWeight: '400'
    },
    qODDeckText: {
        color: 'whitesmoke',
        fontWeight: '600',
        fontSize: 60,
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
        color: 'blue',
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
        fontSize: 18,
    },
    deckInfoCard: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2 },
        backgroundColor: 'honeydew',
    },
    deckInfoDescription: {
        body: {
            fontFamily: "DM Sans",
            margin: 20,
        },
        blockquote: {
            fontFamily: "DM Sans",
            paddingLeft: 10,
            fontWeight: 600,
            fontSize: 18,
            backgroundColor: 'honeydew',
            borderLeftWidth: 7,
            borderLeftColor: "red"
        },
    },
    deckInfoRules: {
        heading3: {
            fontFamily: "DM Sans",
            color: "black",
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'
        },
        heading5: {
            fontFamily: "DM Sans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 18,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DM Sans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 18,
            textAlign: 'center',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DM Sans",
            fontSize: 18,
            backgroundColor: 'honeydew',
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
            backgroundColor: "#rgb(180 185 162)",
            color: "white",
            width: "30",
            height: "30",
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 'bold',
            fontSize: 22,
            lineHeight: "0",
        },
        bullet_list: {
            padding: 10,
            lineHeight: 24,
        },
        body: {
            fontFamily: "DM Sans",
            margin: 20,
            paddingLeft: 10
        }
    },
    onboardingDeckText: {
        color: "transparent"
    },
    onboardingText: {
        heading1: {
            flexDirection: 'column',
            fontFamily: "DM Sans",
            color: "black",
            textAlign: 'lefyt',
            fontSize: 40,
            fontWeight: 400,
            marginBottom: 20
        },
        heading2: {
            fontFamily: "DM Sans",
            marginBottom: 20,
            fontWeight: 600,
            fontSize: 40,
            textAlign: 'center',
            color: 'black'
        },
        heading3: {
            fontFamily: "DM Sans",
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 500,
            fontSize: 20,
            textAlign: 'left',
            color: 'black'
        },
        heading4: {
            fontFamily: "DM Sans",
            marginTop: 20,
            fontWeight: 400,
            fontSize: 18,
            textAlign: 'left',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DM Sans",
            fontSize: 18,
            backgroundColor: 'honeydew',
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
            backgroundColor: "#rgb(180 185 162)",
            color: "white",
            width: "30",
            height: "30",
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 'bold',
            fontSize: 22,
            lineHeight: "0",
        },
        bullet_list: {
            margin: 0,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 18,
            padding: 0,
            lineHeight: 24,
        },
        list_item: {
            marginTop: 16
        },
        body: {
            fontFamily: "DM Sans",
            margin: 20,
            marginBottom: 40,
            marginTop: 40
        }
    }
});