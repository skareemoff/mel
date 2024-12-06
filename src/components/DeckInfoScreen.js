import React from 'react'
import { FlatList, Text, SafeAreaView, ScrollView, StatusBar, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Card from './Card';
import styles from '../assets/style'
import DeckData from './DeckData'
import Markdown from 'react-native-markdown-display';
import {HALF_CARD_HEIGHT} from './Utils'
import { Appbar } from 'react-native-paper';
import {BOTTOM_APPBAR_HEIGHT} from './Utils'

const DeckInfoScreen = ({route, navigation}) => {
    const { deckID } = route.params;
    const deckData = DeckData.inst().getDeck(deckID)

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
                textStyle={deckData.deckTextStyle}
                cardStyle={deckData.deckStyle}/>
        : item.id === 'description'
            ? <SafeAreaView>
                <Markdown style={styles.deckInfoDescription}>{deckData.description}</Markdown>
            </SafeAreaView>
        : item.id === 'example'
            ? <Card
                type='card'
                height='half'
                deckName={deckData.deckName}
                text={deckData.cards[0].text}
                textStyle='deckInfoText'
                cardStyle='deckInfoCard' />
            :  <SafeAreaView>
                <Markdown style={styles.deckInfoRules}>{deckData.rules}</Markdown>
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

        <Appbar style={[ st.bottom, { backgroundColor: 'transparent', height: BOTTOM_APPBAR_HEIGHT - 80 }]} >
          <TouchableOpacity style={[st.button, st.buttonMiddle]} onPressOut={() => clickDeck()}>
            <Image name="share" style={st.buttonImage} source={require("../assets/images/button-play.png")} />
          </TouchableOpacity>
        </Appbar>

        </View>
    )
}

export default DeckInfoScreen


const st = StyleSheet.create({
    bottom: {
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 400,
    },

    buttonImage: {
        height: 60,
        width: 140,
      },

    button: {
      borderRadius: "20%",
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'hidden',
      marginBottom: 10,
    },
  });