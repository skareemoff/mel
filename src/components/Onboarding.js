import React, { useState } from 'react';
import { useSharedValue, } from 'react-native-reanimated';
import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import { HeaderBar } from './HeaderBar';
import styles from '../assets/style';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Onboarding({navigation}) {
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
    <GestureHandlerRootView style={styles.container}>
        <HeaderBar isHomeScreen={false} navigation={navigation}/>
        <View style={stl.onboardingContainer}>
          {cardDeck.map((item, index) => {
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
    </GestureHandlerRootView>
  );
}

const stl = EStyleSheet.create({
    onboardingContainer: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});