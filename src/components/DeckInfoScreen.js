import React from 'react'
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData'
import Markdown from 'react-native-markdown-display';
import {HALF_CARD_HEIGHT} from './Utils'
import { Appbar } from 'react-native-paper';
import {BOTTOM_APPBAR_HEIGHT} from './Utils'
import { HeaderBar } from './HeaderBar';
import EStyleSheet from 'react-native-extended-stylesheet';

const DeckInfoScreen = ({route, navigation}) => {
    const { deckID } = route.params;
    const deckData = DeckData.getDeck(deckID);

    const cards = [ {'id':'header'}, {'id': "deck"}, {'id':'description'}, {'id':'example'}, {'id': 'rules'}];
    const clickDeck = () => {
        navigation.navigate('Play', { deckID: deckID });
    };

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (<HeaderBar isHomeScreen={false} navigation={navigation} />)
            case 'deck':
                return( <Card
                    type='deck'
                    text={deckData.deckName}
                    deckBackground={deckData.deckBackground}
                    cardTextStyle={deckData.deckTextStyle}
                    cardStyle={deckData.deckStyle}
                    subText={deckData.subText}
                    cardSubTextStyle={deckData.cardSubTextStyle}/>)
            case 'description':
                return ( <View> { deckData.description && <Markdown style={styles.deckInfoDescription}>{deckData.description}</Markdown> } </View>)
            case 'example':
                return ( <Card
                    type='card'
                    height='half'
                    deckName={DeckData.getDeckName(deckData.id)}
                    text={deckData.cards.length > 0 ? deckData.cards[0].text : deckData.exampleText }
                    deckTextStyle='deckTitle'
                    cardTextStyle='deckInfoText'
                    cardStyle='deckInfoCard'
                    infoLeft='Example'
                    infoTextStyleLeft='shareableInfoLeft'
                    isFavourite='no'
                    />)
            case 'rules':
                return ( <View> { deckData.rules && <Markdown style={styles.deckInfoRules}>{deckData.rules}</Markdown> } </View> )
            default:
                return null;
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                contentContainerStyle={{
                    paddingBottom: HALF_CARD_HEIGHT / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                ItemSeparatorComponent={() => <View style={{height: 20}} />}
                showsVerticalScrollIndicator={false}
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />
            <Appbar style={[ styles.appbarBottom, { height: BOTTOM_APPBAR_HEIGHT - 80, backgroundColor: 'transparent' }]} >
                <TouchableOpacity style={[stl.largeButton, styles.buttonMiddle]} onPressOut={() => clickDeck()}>
                    <Image name="share" style={stl.largeButtonImage} source={require("../assets/images/button-play.png")} />
                </TouchableOpacity>
            </Appbar>
        </View>
    )
}

export default DeckInfoScreen


const stl = EStyleSheet.create({
  largeButton: {
    borderRadius: "20%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  largeButtonImage: {
      height: 60,
      width: 140,
  },
});