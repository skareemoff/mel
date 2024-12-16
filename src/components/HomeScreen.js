import { FlatList, StatusBar, View } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData.js'
import {HALF_CARD_HEIGHT} from './Utils'
import RevealableCard from './RevealableCard';

const HomeScreen = ({navigation}) => {
    const cards = [
        {
            id: 'questionOfTheDay',
            deckName: 'Question of the day',
            text: DeckData.getQuestionOfTheDay(),
            type: 'deck',
            height: 'full',
            deckBackground: 'homeBG',
            cardTextStyle: 'qODCardText',
            deckTextStyle: 'qODDeckText',
            cardStyle: 'qODCard',
        },
        ...DeckData.decks(),
        DeckData.getFavDeck()
    ];

    const clickDeck = (cardData) => {
        navigation.navigate('Deck', { deckID: cardData.deckID, deckName: cardData.text })
    }

    const renderCard = ({ item }) => (
        item.id == 'questionOfTheDay'
        ? <RevealableCard
            id='questionOfTheDay'
            deckName='Question of the day'
            text={DeckData.getQuestionOfTheDay()}
            type='deck'
            height='full'
            deckBackground='homeBG'
            cardTextStyle='qODCardText'
            deckTextStyle='qODDeckText'
            cardStyle='qODCard'
            deckStyle='qODDeck'
        />
        :  <Card
                type='deck'
                height={item.height}
                deckID={item.id}
                text={item.deckName}
                deckBackground={item.deckBackground}
                clickHandler={clickDeck}
                cardTextStyle={item.deckTextStyle}
                cardStyle={item.deckStyle}
                subText={item.subText}
                cardSubTextStyle={item.cardSubTextStyle}
            />
    );

    return (
        <View style={styles.container}>
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
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
};

export default HomeScreen;
