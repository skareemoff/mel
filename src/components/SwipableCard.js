import {StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, runOnJS, withTiming } from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Card from './Card';

const SwipableCard = ({
  deckName,
  maxVisibleItems,
  item,
  index,
  cardMap,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
  setNewData
}) => {
  const {width} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const numberOfCards = dataLength - currentIndex;

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
        // If the swipe distance is greater than 150 or the swipe velocity is greater than 1000
        // go to the next card
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setNewData)([...cardMap, cardMap[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
          // If the swipe distance is less than 150 or the swipe velocity is less than 1000
          // go back to the original position
        } else {
          translateX.value = withTiming(0, {duration: 500});
          animatedValue.value = withTiming(currentIndex, {duration: 500});
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
      <Animated.View
          style={[
              styles.container,
              {
                backgroundColor: "cornflowerblue",
                zIndex: dataLength - index
              },
              animatedStyle
          ]}>

        <Card
          deckName={deckName}
          text={item.text}
          info={(index+1)+" / "+numberOfCards}
          height='100%'
          width='100%'
          />

      </Animated.View>
    </GestureDetector>
  );
}

export default SwipableCard;

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      width: '85%',
      height: '100%',
      borderRadius: 28,
      maxWidth: 400,
  },
});