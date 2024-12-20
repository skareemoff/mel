import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
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
        height: '100%',
        backgroundColor: 'transparent'
    },
    middle: {
        flex: 4,
        justifyContent: 'center',
        alignContent: "center",
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: 0,
        backgroundColor: 'transparent'
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
        backgroundColor: 'transparent'
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