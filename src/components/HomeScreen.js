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
            text: DeckData.inst().getQuestionOfTheDay(),
            type: 'deck',
            height: 'full',
            deckBackground: 'homeBG',
            cardTextStyle: 'qODCardText',
            deckTextStyle: 'qODDeckText',
            cardStyle: 'qODCard',
        },
        ...DeckData.inst().data()
    ];

    const clickDeck = (cardData) => {
        navigation.navigate('Deck', { deckID: cardData.deckID, deckName: cardData.text })
    }

    const renderCard = ({ item }) => (
        item.id == 0
        ? <RotatableCard
            id={0}
            deckName='Question of the day'
            text={DeckData.inst().getQuestionOfTheDay()}
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
                textStyle={item.deckTextStyle}
                cardStyle={item.deckStyle}

                info={"❤️ "+height}
                moreInfo={"💬 "+width}
            />
    );

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
                    bounces={false} // Prevent overscrolling past the first card
                    snapToAlignment="start"
                    decelerationRate="fast"
                />
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
