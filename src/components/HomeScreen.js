import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, StatusBar, View, Dimensions } from 'react-native';
import Card from './Card';

// Screen dimensions
const { height, width } = Dimensions.get('window');

// Card dimensions
const FULL_CARD_HEIGHT = height * 0.7;
const HALF_CARD_HEIGHT = height * 0.25;

const HomeScreen = ({navigation}) => {
    const deckAndCardData = require('../data/cards.json');
    const cards = [
        {
            id: 0,
            deckName: 'Question of the day',
            text: "What's the most spontaneous thing you've ever done?",
            type: 'card',
        },
        ...deckAndCardData.decks
    ];

    // Function to load more cards when reaching the end
    const loadMoreCards = () => {
    };

    const clickDeck = (cardData) => {
        navigation.navigate('Deck',
            { deckID: cardData.deckID, deckName: cardData.text })
    };

    const clickCard = (cardData) => {
        // navigation.navigate('Deck')
    };

    const renderCard = ({ item }) => (
        item.type == 'card' ?
        <Card
            deckID={item.deckID}
            deckName={item.deckName}
            text={item.text}
            height={FULL_CARD_HEIGHT}
            width={width}
            info={"🤔 "+height}
            moreInfo={"⏱️ 11h"}
            deckColor="lightgreen"
            clickHandler={clickCard}
        />
        :
        <Card
            deckID={item.id}
            text={item.deckName}
            height={HALF_CARD_HEIGHT}
            width={width}
            info={"❤️ "+height}
            moreInfo={"💬 "+width}
            deckColor="lightblue"
            clickHandler={clickDeck}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList style={styles.flatList}
                data={cards}
                renderItem={renderCard}
                contentContainerStyle={{
                    paddingTop: StatusBar.currentHeight + 40, // Add padding at the top to avoid status bar overlap
                    paddingBottom: HALF_CARD_HEIGHT / 2, // Ensure padding for the last card
                }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMoreCards}
                onEndReachedThreshold={1}
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        backgroundColor: '#E3F8C0',
    }
});

export default HomeScreen;
