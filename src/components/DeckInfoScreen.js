import React from 'react'
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Appbar } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import Card from './Card';
import styles from './style'
import {HALF_CARD_HEIGHT} from './style'
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'

const DeckInfoScreen = ({route, navigation}) => {
    const {dd} = React.useContext(MELContext);
    const { deckID } = route.params;
    const deckData = dd.getDeck(deckID);

    const cards = [
        {'id': 'header'},
        {'id': 'deck'},
        {'id': 'description'},
        {'id': 'example'},
        {'id': 'rules'}
    ];
    const clickDeck = () => {
        navigation.navigate('Play', { deckID: deckID });
    };

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (<HeaderBar showBackButton={true} navigation={navigation} />)
            case 'deck':
                return(
                    <View style={styles.flatListItem}>
                        <Card
                            type='deck'
                            text={deckData.deckName}
                            cardTextStyle={deckData.deckTextStyle}
                            deckBackgroundSvg={deckData.deckBackgroundSvg}
                            deckBackgroundColor={deckData.deckBackgroundColor}
                            cardSubTextStyle={deckData.cardSubTextStyle}/>
                    </View>
                )
            case 'description':
                return (
                    <View style={styles.flatListItem}>
                        { deckData.description &&
                            <Markdown style={styles.deckInfoDescription}>{deckData.description}</Markdown>
                        }
                    </View>
                )
            case 'example':
                return (
                    <View style={styles.flatListItem}>
                        <Card
                            type='card'
                            height='half'
                            deckName={dd.getDeckName(deckData.id)}
                            text={deckData.cards.length > 0 ? deckData.cards[0].text : deckData.exampleText }
                            deckTextStyle='exampleDeckTitle'
                            cardTextStyle='exampleDeckText'
                            cardStyle='deckInfoCard'
                            infoLeft='Example'
                            infoTextStyleLeft='exampleInfoLeft'
                        />
                    </View>
                )
            case 'rules':
                return (
                <View style={{top: 60}}>
                    { deckData.rules &&
                        <Markdown style={styles.deckInfoRules}>{deckData.rules}</Markdown>
                    }
                </View> )
            default:
                return null;
        }
    }

    return (
        <View>
            <FlatList
                style={[styles.flatList]}
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                contentContainerStyle={{
                    paddingBottom: HALF_CARD_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                ItemSeparatorComponent={() => <View style={{height: 20}} />}
                showsVerticalScrollIndicator={false}
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />
            <Appbar style={[ styles.appbarBottom,
                { backgroundColor: 'transparent'}
            ]} >
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
    borderRadius: '20%',
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