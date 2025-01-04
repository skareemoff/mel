import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, runOnJS, withTiming, configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Card from './Card';
import {width} from './style'

configureReanimatedLogger({ level: ReanimatedLogLevel.warn, strict: false });

/**
 * Animation made following this video: https://www.youtube.com/watch?v=-JoQ5Y_unl8
 */
const SwipableCard = (data) => {
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const item = data.item;
  const index = data.index;
  const animatedValue = data.animatedValue;
  const currentIndex = data.currentIndex;

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
            runOnJS(data.setCurrentIndex)(currentIndex + 1); // Increment index
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

    return {
      transform: [
        {translateY: currentItem ? 0 : translateY},
        {scale: currentItem ? 1 : scale},
        {translateX: translateX.value},
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : '0deg',
        },
      ],
    };
  });

  const param = (pName) => {
    return data[pName]
    ? data[pName]
    : item[pName];
  };

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[
        { zIndex: data.deckSize - index},
        animatedStyle,
        styles.cardContainer
      ]}>
          <Card
            type='card'
            height = {param('height')}
            shareable = {param('shareable')}
            useMarkdown = {param('useMarkdown')}
            deckTextStyle = {param('deckTextStyle')}
            deckSubTextStyle = {param('deckSubTextStyle')}
            deckName = {param('deckName')}
            deckSubText = {param('deckSubText')}
            text = {param('text')}
            subText = {param('subText')}
            infoLeft = {param('infoLeft')}
            infoRight = {param('infoRight')}
            deckBackgroundSvg = {param('deckBackgroundSvg')}
            deckBackgroundColor = {param('deckBackgroundColor')}
            cardStyle = {param('cardStyle')}
            cardTextStyle = {param('cardTextStyle')}
            cardSubTextStyle = {param('cardSubTextStyle')}
            infoTextStyleLeft = {param('infoTextStyleLeft')}
            infoTextStyleRight = {param('infoTextStyleRight')}
          />
      </Animated.View>
    </GestureDetector>
  );
}

export default SwipableCard;

const styles = EStyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});
