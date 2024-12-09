import React from 'react'
import { FlatList, SafeAreaView, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData'
import Markdown from 'react-native-markdown-display';
import {HALF_CARD_HEIGHT} from './Utils'
import { Appbar } from 'react-native-paper';
import {BOTTOM_APPBAR_HEIGHT} from './Utils'

const DeckInfoScreen = ({route, navigation}) => {
    const { deckID } = route.params;
    const deckData = DeckData.getDeck(deckID)

    const cards = [ {'id': "deck"}, {'id':'description'}, {'id':'example'}, {'id': 'rules'}];
    const clickDeck = () => {
        navigation.navigate('Play', { deckID: deckID });
    };

    const renderCard = ({ item }) => (
        item.id === 'deck'
            ? <Card
                type='deck'
                text={deckData.deckName}
                deckBackground={deckData.deckBackground}
                cardTextStyle={deckData.deckTextStyle}
                cardStyle={deckData.deckStyle}/>
        : item.id === 'description'
            ? <SafeAreaView>
                { deckData.description && <Markdown style={styles.deckInfoDescription}>{deckData.description}</Markdown> }
            </SafeAreaView>
        : item.id === 'example'
            ? <Card
                type='card'
                height='half'
                deckName={deckData.cards[0].deckName ? deckData.cards[0].deckName : deckData.deckName}
                text={deckData.cards[0].text}
                deckTextStyle='deckTitle'
                cardTextStyle='deckInfoText'
                cardStyle='deckInfoCard'
                infoRight='Example'
                infoTextStyleRight='exampleInfoTextStyleRight'
                isFavourite={DeckData.isFavourite(deckData.cards[0].id) ? 'yes' : 'no'}
                />
            :  <SafeAreaView>
                { deckData.rules && <Markdown style={styles.deckInfoRules}>{deckData.rules}</Markdown> }
            </SafeAreaView>
    );

    return (
        <View style={[styles.container,
            {
                shadowColor:'#000',
                shadowOpacity:0.3,
                shadowOffset:{width: 1, height: 1 }
            }
        ]}>
            <FlatList
                style={styles.flatList}
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                contentContainerStyle={{
                    paddingTop: StatusBar.currentHeight + 30, // Add padding at the top to avoid status bar overlap
                    paddingBottom: HALF_CARD_HEIGHT / 2, // Ensure padding for the last card
                }}
                showsVerticalScrollIndicator={false}
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />

            <Appbar style={[ styles.appbarBottom, { height: BOTTOM_APPBAR_HEIGHT - 80 }]} >
            <TouchableOpacity style={[styles.largeButton, styles.buttonMiddle]} onPressOut={() => clickDeck()}>
                <Image name="share" style={styles.largeButtonImage} source={require("../assets/images/button-play.png")} />
            </TouchableOpacity>
            </Appbar>

        </View>
    )
}

export default DeckInfoScreen