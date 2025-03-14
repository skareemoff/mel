import { FlatList, Image, Linking, Pressable, Text, View } from 'react-native';
import Card from './Card';
import styles from './style'
import QoDCard from './QoDCard';
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'
import { useContext, useEffect, useState } from 'react';
import {ID_FAVOURITES} from './DeckData'
import SaleCard from './SaleCard'
import { checkDecksAccessPurchased, purchaseProduct, restorePurchases } from './monetization';
import analytics from '@react-native-firebase/analytics';

const HomeScreen = ({navigation}) => {
    const {dd, favouriteState, purchaseState, setPurchaseState, questionOfTheDayState} = useContext(MELContext);
    const [screenKey, setScreenKey] = useState(0);
    const cards = [
        {'id':'header'},
        {'id': 'questionOfTheDay'},
        //{'id':'sale'},
        ...dd.decks(),
        dd.getFavDeck(),
        {'id': 'sendFeedback'},
        {'id': 'restorePurchase'}
    ];

    useEffect(() => {
        setScreenKey(prevKey => prevKey + 1);
      }, [questionOfTheDayState]);

      useEffect(() => {
        checkDecksAccessPurchased(setPurchaseState);
        dd.setPurchasedState(purchaseState);
        cards.splice(0, cards.length,  [
            {'id':'header'},
            {'id': 'questionOfTheDay'},
            //{'id':'sale'},
            ...dd.decks(),
            dd.getFavDeck()
        ]);
        setScreenKey(prevKey => prevKey + 1);
    }, [purchaseState]);


    const clickDeck = (dd) => {
        async () => await analytics().logEvent('deck', {
              id: dd.id,
              name: dd.deckName
        });
        navigation.navigate('Info', { deckID: dd.id, deckName: dd.deckName })
    };

    const clickSale = async () => {
        async () => await analytics().logEvent('purchase', {
            id: 'homeScreen'
        });
        purchaseProduct(setPurchaseState);
    };

    const clickRestore = async () => {
        async () => await analytics().logEvent('restorePurchase', {
            id: 'homeScreen'
        });
        restorePurchases(setPurchaseState);
    };

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (
                    <HeaderBar showBackButton={false} navigation={navigation} />
                )
            case 'questionOfTheDay':
                return (
                    <QoDCard />
            )
            case 'sale':
                return purchaseState
                ? null
                : (
                    <Pressable onPress={() => clickSale()}>
                        <SaleCard />
                    </Pressable>
                );

            case 'sendFeedback':
                return (
                    <Pressable style={styles.flatListItem} onPress={() => Linking.openURL('mailto:feedback@mel.life?subject=Feedback from MEL app') }>
                        <View style={{
                            borderRadius: 40,
                            width: 353,
                            height: 84,
                            borderColor: 'black',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 32,
                                fontFamily: 'DMSans',
                                fontWeight: 500,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'black'}}>Send feedback</Text>
                        </View>
                    </Pressable>
                );
            case 'restorePurchase':
                return (
                    <Pressable style={styles.flatListItem} onPress={() => clickRestore()}>
                        <View style={{
                            borderRadius: 40,
                            width: 353,
                            height: 84,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 32,
                                fontFamily: 'DMSans',
                                fontWeight: 500,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'black'}}>Restore purchase</Text>
                        </View>
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
            key={screenKey}
            renderItem={renderCard}
            contentContainerStyle={{
                paddingBottom: 160,
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
