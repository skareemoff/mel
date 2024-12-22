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
        fontFamily: "DMSans",
        color: 'black',
        fontWeight: '400',
        fontSize: 24,
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
        fontFamily: "DMSans",
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
        fontFamily: 'DMSans',
        textAlign: 'center',
        color: '#000',
        fontFamily: 'DMSans',
    },
    shotDeckSubText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#666',
        marginTop: 5,
        fontFamily: 'DMSans',
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
        fontFamily: 'DMSans',
    },
    shotCardSubText: {
        backgroundColor: 'transparent',
        color: '#000',
        marginTop: 20,
        fontFamily: 'DMSans',
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
        fontFamily: 'DMSans',
    },
    shotFooterTextRight: {
        color: '#666',
        fontFamily: 'DMSans',
    },
});