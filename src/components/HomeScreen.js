import { FlatList, Image, Pressable, View } from 'react-native';
import Card from './Card';
import styles from './style'
import {HALF_CARD_HEIGHT} from './style'
import QoDCard from './QoDCard';
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'
import { useContext, useEffect } from 'react';
import {ID_FAVOURITES} from './DeckData'
import SaleCard from './SaleCard'
import { checkDecksAccessPurchased, purchaseProduct } from './monetization';

const HomeScreen = ({navigation}) => {
    const {dd, favouriteState, purchaseState, setPurchaseState} = useContext(MELContext);
    const cards = [
        {'id':'header'},
        {'id': 'questionOfTheDay'},
        {'id':'sale'},
        ...dd.decks(),
        dd.getFavDeck()
    ];

    useEffect(() => {
        checkDecksAccessPurchased(setPurchaseState);
        dd.doFilter(purchaseState);
    }, [purchaseState]);

    const clickDeck = (dd) => {
        navigation.navigate('Info', { deckID: dd.id, deckName: dd.deckName })
    };

    const clickSale = async () => {
        console.log("INITIATING PURCHASE");
        purchaseProduct(setPurchaseState);
    };

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
            case 'sale':
                return purchaseState
                ? null
                : (
                    <Pressable onPress={() => clickSale()}>
                        <SaleCard />
                    </Pressable>
                );

            default:
                const viewKey = item.id == ID_FAVOURITES ? favouriteState : 0;
                return (
                    <View style={styles.flatListItem} key={viewKey}>
                        { item.isLocked &&
                            <Image source={require("../assets/images/button-small-lock.png")} style={{
                                height: 42,
                                width: 42,
                                top: 12,
                                right: 12,
                                zIndex: 1,
                                position: 'absolute',
                                backgroundColor: 'transparent'
                            }}/>
                        }
                        <Pressable onPress={() => clickDeck(item)}>
                            <Card
                                type='deck'
                                height={item.height}
                                deckID={item.id}
                                text={item.deckName}
                                cardTextStyle={item.deckTextStyle}
                                cardStyle={item.deckStyle}
                                subText={item.subText}
                                deckInfo={dd.getDeckInfo(item)}
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
            key={purchaseState}
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
