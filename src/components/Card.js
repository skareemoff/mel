import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Card = (cardData, props) => {
    const buildCard = () => { return (
            <View style={[styles.card,
                {
                    height: cardData.height,
                    width: cardData.width * 0.9,
                    marginHorizontal: cardData.width * 0.05,
                    shadowOffset: { width: 0, height: 4 },
                    backgroundColor: cardData.deckColor
                }]}
            >
                <View style={styles.top}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.deckName}>{cardData.deckName}</Text>
                        <Text style={styles.subText}>{cardData.subText}</Text>
                    </View>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.cardText}>{cardData.text}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.footerTextLeft}>{cardData.info}</Text>
                    <Text style={styles.footerTextRight}>{cardData.moreInfo}</Text>
                </View>
            </View>
    )};

    if(cardData.clickHandler != null)
        return (
            <Pressable style={styles.deckVisible} onPress={() => cardData.clickHandler(cardData)}>
                {buildCard()}
            </Pressable>
        );
    else
        return buildCard()
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
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
        flex: 8,
        justifyContent: 'center',
        alignContent: "center",
        width: "100%",
        maxWidth: 400,
        padding: 20,
        paddingTop: 0,
    },
    cardHeader:{
        alignItems: 'center',
    },
    deckName: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        color: 'lightgoldenrodyellow',
    },
    subText: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 14,
        textAlign: 'center',
        color: 'yellow',
    },
    cardText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        paddingBottom: 16,
    },
    footerTextLeft: {
        fontSize: 18,
        color: 'lemonchiffon',
        position: 'absolute',
        left: 15,
    },
    footerTextRight: {
        fontSize: 18,
        color: 'lemonchiffon',
        position: 'absolute',
        right: 15,
    },
});