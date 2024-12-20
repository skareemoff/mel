import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, runOnJS, withTiming, configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Card from './Card';
import {width} from './Utils'
import DeckData from './DeckData'

configureReanimatedLogger({ level: ReanimatedLogLevel.warn, strict: false });

const SwipableCard = ({
  deckName,
  maxVisibleItems,
  item,
  index,
  deckSize,
  animatedValue,
  currentIndex,
  setCurrentIndex
}) => {
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  React.useEffect(() => {
    translateX.value = 0; // Reset translation
  }, []);

  const pan = Gesture.Pan()
    .onUpdate(e => {
      // e.translationX is the distance of the swipe
      // e.translationX is positive if the swipe is to the right
      // isSwipeRight is true if the swipe is to the right
      const isSwipeRight = e.translationX > 0;

      // direction 1 is right, -1 is left
      direction.value = isSwipeRight ? 1 : -1;

      // If the current index is the same as the index of the card
      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1],
        );
      }
    })
    .onEnd(e => {
      if (currentIndex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setCurrentIndex)(currentIndex + 1); // Increment index
          });
          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentIndex, { duration: 500 });
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-40, 0],
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1],
    );

    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20],
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1],
    );

    return {
      transform: [
        {translateY: currentItem ? 0 : translateY},
        {scale: currentItem ? 1 : scale},
        {translateX: translateX.value},
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : '0deg',
        },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[
        { zIndex: deckSize - index},
        animatedStyle,
        styles.onboardingContainer
        ]}>
          <Card
            type='card'
            deckName={deckName}
            // infoLeft={(index+1)+" / "+deckSize}
            text={item.text}
            subText={item.subText}
            height={item.height}
            useMarkdown={item.useMarkdown}
            deckTextStyle={item.deckTextStyle}
            deckSubTextStyle={item.deckSubTextStyle}
            cardTextStyle={item.cardTextStyle}
            cardSubTextStyle={item.cardSubTextStyle}
            cardStyle={item.cardStyle}
            infoTextStyleLeft={item.infoTextStyleLeft}
            infoTextStyleRight={item.infoTextStyleRight}
            isFavourite={DeckData.isFavourite(item.id) ? 'yes' : 'no'}
          />
      </Animated.View>
    </GestureDetector>
  );
}

export default SwipableCard;

const styles = EStyleSheet.create({
  onboardingContainer: {
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});
