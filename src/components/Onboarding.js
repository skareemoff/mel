import React, { useState } from 'react';
import { useSharedValue, } from 'react-native-reanimated';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import {height} from './Utils'

export default function Onboarding({navigation}) {
  const insets = useSafeAreaInsets();

  const deckData = DeckData.data().onboarding;
  const cardDeck = [...deckData.cards];

  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);

  const handleSetCurrentIndex = (newIndex) => {
    if (newIndex >= cardDeck.length) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
       });
    } else {
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
        <View style={[styles.cardContainer, { paddingTop: Math.max(insets.top, height * 0.3), }]}>
          {cardDeck.map((item, index) => {
            if (index > currentIndex + cardDeck.length || index < currentIndex) {
              return null;
            }
            return (
              <SwipableCard
                deckName={deckData.deckName}
                useMarkdown='yes'
                maxVisibleItems={cardDeck.length}
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