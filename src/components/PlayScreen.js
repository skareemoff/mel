import React, { useState } from 'react';
import { useSharedValue, } from 'react-native-reanimated';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SwipableCard from './SwipableCard';

const BOTTOM_APPBAR_HEIGHT = 80;

export default function PlayScreen({route, navigation}) {
  const MAX = 3;
  const { deckID } = route.params;
  const { bottom } = useSafeAreaInsets();

  const deckAndCardData = require('../data/cards.json');
  const deckData = deckAndCardData.decks.filter(item => item.id == deckID)[0];
  const cardDeck = [...deckData.cards];

  const [deckKey, setDeckKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);

  const handleSetCurrentIndex = (newIndex) => {
    if (newIndex >= cardDeck.length) {
      setCurrentIndex(0); // Restart from the first card
      animatedValue.value = 0;
      setDeckKey(prevKey => prevKey + 1); // Change key to force re-render
      cardDeck.splice(0, cardDeck.length, cardDeck);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer} key={deckKey}>
          {cardDeck.map((item, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <SwipableCard
                deckName={deckData.deckName}
                maxVisibleItems={MAX}
                item={item}
                index={index}
                deckSize={cardDeck.length}
                animatedValue={animatedValue}
                currentIndex={currentIndex}
                setCurrentIndex={handleSetCurrentIndex}
                key={index}
              />
            );
          })}
        </View>

        <Appbar style={[ styles.bottom, { height: BOTTOM_APPBAR_HEIGHT + bottom }]} safeAreaInsets={{ bottom }} >
          <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
            <Octicons name="heart" size={32} color="cornflowerblue" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMiddle]}>
            <Octicons name="share" size={32} color="cornflowerblue" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonRight]} onPressOut={() => handleSetCurrentIndex(0)}>
            <MaterialCommunityIcons name="restart" size={32} color="cornflowerblue" />
          </TouchableOpacity>
        </Appbar>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#E3F8C0',
    justifyContent: "center",
    alignContent: "center",
  },
  cardContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#E3F8C0',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: -60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 400,
  },
  button: {
    padding: 10,
    borderRadius: "50%",
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#B0F176',
    borderColor: '#B0F176',
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonLeft: {
  },
  buttonCenter: {

  },
  buttonRight: {
  }
});