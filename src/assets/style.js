import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },
    flatList: {
        backgroundColor: 'white',
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
            marginBottom: 40,
            marginTop: 40
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
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DM Sans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DM Sans",
            fontSize: 16,
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
            marginBottom: 40,
            marginTop: 40
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
            fontSize: 32,
            fontWeight: 400,
            marginBottom: 20
        },
        heading2: {
            fontFamily: "DM Sans",
            marginBottom: 20,
            fontWeight: 600,
            fontSize: 26,
            textAlign: 'center',
            color: 'black'
        },
        heading3: {
            fontFamily: "DM Sans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 500,
            fontSize: 20,
            textAlign: 'left',
            color: 'black'
        },
        heading4: {
            fontFamily: "DM Sans",
            marginTop: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'left',
            color: 'black'
        },
        blockquote: {
            fontFamily: "DM Sans",
            fontSize: 16,
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