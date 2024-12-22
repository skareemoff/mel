import { FlatList, Pressable, View } from 'react-native';
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
            cardTextStyle: 'qODCardText',
            deckTextStyle: 'qODDeckText',
            cardStyle: 'qODCard',
        },
        ...DeckData.decks(),
        DeckData.getFavDeck()
    ];

    const clickDeck = (deckData) => {
        navigation.navigate('Info', { deckID: deckData.id, deckName: deckData.deckName })
    }

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (
                    <HeaderBar showBackButton={false} navigation={navigation} />
                )
            case 'questionOfTheDay':
                return (
                    <View style={styles.flatListItem}>
                        <RevealableCard
                            id='questionOfTheDay'
                            deckName='Question of the day'
                            text={DeckData.getQuestionOfTheDay()}
                            // infoLeft={'' + DeckData.getQoDRevealedCount() + ' reflecting'}
                            infoRight={DeckData.getQoDTTLHours() + ' H'}
                            type='deck'
                            height='full'
                            deckTextStyle='qODDeckText'
                            cardTextStyle='qODCardText'
                            deckStyle='qODDeck'
                            cardStyle='qODCard'
                            infoTextStyleLeft='qODInfoTextLeft'
                            infoTextStyleRight='qODInfoTextRight'
                        />
                    </View>
            )
            default:
                return (
                    <View style={styles.flatListItem}>
                        <Pressable onPress={() => clickDeck(item)}>
                            <Card
                                type='deck'
                                height={item.height}
                                deckID={item.id}
                                text={item.deckName}
                                cardTextStyle={item.deckTextStyle}
                                cardStyle={item.deckStyle}
                                subText={item.subText}
                                cardSubTextStyle={item.cardSubTextStyle}
                                deckBackgroundSvg={item.deckBackgroundSvg}
                                deckBackgroundColor={item.deckBackgroundColor}
                            />
                        </Pressable>
                    </View>
                )
    }};

    return (
        <FlatList
            style={styles.flatList}
            data={cards}
            renderItem={renderCard}
            contentContainerStyle={{
                paddingBottom: HALF_CARD_HEIGHT / 2, // Ensure padding for the last card
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '$containerColor',
                width: 353,
            }}
            ItemSeparatorComponent={() => <View style={{backgroundColor: 'transparent', height: 20}} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            bounces={false} // Prevent overscrolling past the first card
            snapToAlignment="start"
            decelerationRate="fast"
        />
    );
};

export default HomeScreen;
