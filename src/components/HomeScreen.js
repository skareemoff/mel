import { FlatList, Image, StatusBar, View } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData.js'
import {HALF_CARD_HEIGHT} from './Utils'
import RevealableCard from './RevealableCard';
import { HeaderBar } from './HeaderBar';

const HomeScreen = ({navigation}) => {
    const cards = [
        {'id':'header'},
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
        navigation.navigate('Info', { deckID: cardData.deckID, deckName: cardData.text })
    }

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header': return (<HeaderBar isHomeScreen={true} navigation={navigation} />)
            case 'questionOfTheDay':
                return (<RevealableCard
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
                />)
            default:
                return (<Card
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
            />)
    }};

    return (
        <View style={[styles.container, styles.headerContainer]}>
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
