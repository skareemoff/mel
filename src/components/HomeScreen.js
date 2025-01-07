import { FlatList, Pressable, View } from 'react-native';
import Card from './Card';
import styles from './style'
import {HALF_CARD_HEIGHT} from './style'
import QoDCard from './QoDCard';
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'
import { useContext } from 'react';
import {ID_FAVOURITES} from './DeckData'

const HomeScreen = ({navigation}) => {
    const {dd, favouriteState} = useContext(MELContext);
    const cards = [
        {'id':'header'},
        {'id': 'questionOfTheDay'},
        ...dd.decks(),
        dd.getFavDeck()
    ];

    const clickDeck = (dd) => {
        navigation.navigate('Info', { deckID: dd.id, deckName: dd.deckName })
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
            // case 'favourites':
            //     return (
            //         <View style={styles.flatListItem}>
            //             <QoDCard />
            //         </View>
            // )
            default:
                const viewKey = item.id == ID_FAVOURITES ? favouriteState : 0;
                return (
                    <View style={styles.flatListItem} key={viewKey}>
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
