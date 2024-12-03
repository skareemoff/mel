import { FlatList, StatusBar, View, ImageBackground } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData.js'
import {height, width, HALF_CARD_HEIGHT} from './Utils'

const HomeScreen = ({navigation}) => {
    const cards = [
        {
            id: 0,
            deckName: 'Question of the day',
            text: "What's the most spontaneous thing you've ever done?",
            type: 'card',
        },
        ...DeckData.inst().data()
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
        item.type == 'card'
        ? <Card
            type='card'
            deckID={item.deckID}
            deckName={item.deckName}
            text={item.text}
            info={height}
            moreInfo={"11h"}
            clickHandler={clickCard}
            deckStyle={item.deckStyle}
        />
        : <Card
            type='deck'
            deckID={item.id}
            text={item.deckName}
            info={"❤️ "+height}
            moreInfo={"💬 "+width}
            deckBackground={item.deckBackground}
            clickHandler={clickDeck}
            deckStyle={item.deckStyle}
        />
    );

    return (
        <View style={styles.container}>
            <ImageBackground
                style={{flex: 1, resizeMode: 'cover', width: null, height: null,}}
                source={DeckData.inst().getDeckImage('homeBG')}>
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
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
