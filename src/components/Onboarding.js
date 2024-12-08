import React, { useState } from 'react';
import { useSharedValue, } from 'react-native-reanimated';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import {height} from './Utils'
import styles from '../assets/style'

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