import React, { useState } from 'react';
import { useSharedValue, } from 'react-native-reanimated';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import {BOTTOM_APPBAR_HEIGHT} from './Utils'
import {shuffle} from './Utils'

export default function PlayScreen({route, navigation}) {
  const MAX = 3;
  const { deckID } = route.params;
  const insets = useSafeAreaInsets();

  const deckData = DeckData.getDeck(deckID);
  const cardDeck = useSharedValue(shuffle(deckData.cards));

  const [deckKey, setDeckKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);

  const handleSetCurrentIndex = (newIndex) => {
    if(newIndex === -1) {
      cardDeck.value = shuffle(cardDeck.value);
      setCurrentIndex(0); // Restart from the first card
      animatedValue.value = 0;
      setDeckKey(prevKey => prevKey + 1); // Change key to force re-render
    }
    else if(newIndex >= cardDeck.value.length) {
      cardDeck.value.splice(0, cardDeck.value.length, cardDeck.value);
      console.log("REACHED THE END");
      setCurrentIndex(0); // Restart from the first card
      animatedValue.value = 0;
      setDeckKey(prevKey => prevKey + 1); // Change key to force re-render
    }
    else {
      console.log("SETTING: ", newIndex, cardDeck.value[newIndex].text);
      setCurrentIndex(newIndex);
    }
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView edges={['right', 'left']} style={[styles.container,]}>
      <ImageBackground
        source={DeckData.getDeckImage(deckData.deckBackground)}
        style={{ height: '100%', width: '100%'}}
      >
        <View
          style={[styles.cardContainer, {paddingTop: Math.max(insets.top, 100), }]}
          key={deckKey}>
          {cardDeck.value.map((item, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <SwipableCard
                deckName={deckData.deckName}
                maxVisibleItems={MAX}
                item={item}
                index={index}
                deckSize={cardDeck.value.length}
                animatedValue={animatedValue}
                currentIndex={currentIndex}
                setCurrentIndex={handleSetCurrentIndex}
                key={index}
              />
            );
          })}
        </View>

        <Appbar style={[ styles.bottom, { height: BOTTOM_APPBAR_HEIGHT + insets.top }]} safeAreaInsets={{ insets }} >
          <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
            <Image name="heart" style={styles.buttonImage} source={require("../assets/images/like.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMiddle]}>
            <Image name="share" style={styles.buttonImage} source={require("../assets/images/share.png")} />
          </TouchableOpacity>
          {/* TODO: Reset doesn't redraw properly */}
          <TouchableOpacity style={[styles.button, styles.buttonRight]} onPressOut={() => handleSetCurrentIndex(-1)}>
            <Image name="restart" style={styles.buttonImage} source={require("../assets/images/undo.png")} />
          </TouchableOpacity>
        </Appbar>
      </ImageBackground>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "baseline",
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
  bottom: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: -60,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxWidth: 400,
  },
  button: {
    borderRadius: "50%",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
  },
});