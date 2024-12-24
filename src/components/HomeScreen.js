import { FlatList, Pressable, View } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData.js'
import {HALF_CARD_HEIGHT} from '../assets/style'
import QoDCard from './QoDCard';
import { HeaderBar } from './HeaderBar';

const HomeScreen = ({navigation}) => {
    const cards = [
        {'id':'header'},
        {'id': 'questionOfTheDay'},
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
                        <QoDCard />
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
                paddingBottom: HALF_CARD_HEIGHT,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '$containerColor',
                width: '$cardWidth',
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
