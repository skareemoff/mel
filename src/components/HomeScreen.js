import { useState } from 'react';
import { FlatList, StatusBar, View, ImageBackground } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData.js'
import {height, width, HALF_CARD_HEIGHT} from './Utils'
import RotatableCard from './RotatableCard';

const HomeScreen = ({navigation}) => {
    const cards = [
        {
            id: 0,
            deckName: 'Question of the day',
            text: DeckData.inst().localQuestinOfTheDay(),
            type: 'deck',
            height: 'full',
            deckBackground: 'homeBG',
            cardTextStyle: 'qODCardText',
            deckTextStyle: 'qODDeckText',
            cardStyle: 'qODCard',
        },
        ...DeckData.inst().data()
    ];

    // Function to load more cards when reaching the end
    const loadMoreCards = () => {
    };

    const clickDeck = (cardData) => {
        if(cardData.deckID == 0) {
            _handleRefresh();
        }
        else {
            navigation.navigate('Deck',
                { deckID: cardData.deckID, deckName: cardData.text })
        }
    };

    const clickCard = (cardData) => {
        // navigation.navigate('Deck')
    };

    const renderCard = ({ item }) => (
        item.id == 0
        ? <RotatableCard
            id={0}
            deckName='Question of the day'
            text={DeckData.inst().localQuestinOfTheDay()}
            type='deck'
            height='full'
            deckBackground='homeBG'
            cardTextStyle='qODCardText'
            deckTextStyle='qODDeckText'
            cardStyle='qODCard'
            deckStyle='qODDeck'
        />
        : (
            item.type == 'card'
            ? <Card
                type='card'
                height={item.height}
                deckID={item.deckID}
                deckName={item.deckName}
                text={item.text}
                clickHandler={clickCard}
                textStyle={item.cardTextStyle}
                cardStyle={item.cardStyle}

                info={height}
                moreInfo={"11h"}
            />
            : <Card
                type='deck'
                height={item.height}
                deckID={item.id}
                text={item.deckName}
                deckBackground={item.deckBackground}
                clickHandler={clickDeck}
                textStyle={item.deckTextStyle}
                cardStyle={item.deckStyle}

                info={"❤️ "+height}
                moreInfo={"💬 "+width}
            />
        )
    );

    const refreshData = [];
    const _handleRefresh = () => {
        console.log('_handleRefresh')
        console.log("Swapped");
        cards[0]['type'] = 'card';
        cards[0]['clickHandler'] = clickCard;
        refreshData.push("X");
    };


    return (
        <View style={styles.container}>
            {/* TODO: image background isn't working */}
            <ImageBackground
                style={{flex: 1, resizeMode: 'cover', width: null, height: null,}}
                source={DeckData.inst().getDeckImage('homeBG')}>
                <FlatList
                    style={styles.flatList}
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
                    extraData={refreshData}
                />
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
