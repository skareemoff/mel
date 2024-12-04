import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Card from './Card'

const RotatableCard = (cardData) => {
  const spin = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  return (
    <View>
        <Animated.View style={[Styles.front, rStyle]}>
            <Card
                type='deck'
                height={cardData.height}
                deckID={cardData.id}
                text={cardData.deckName}
                deckBackground={cardData.deckBackground}
                textStyle={cardData.deckTextStyle}
                cardStyle={cardData.deckStyle}
            />
        </Animated.View>
        <Animated.View style={[Styles.back, bStyle]}>
            <Card
                type='card'
                height={cardData.height}
                deckID={cardData.id}
                deckName={cardData.deckName}
                text={cardData.text}
                clickHandler={() => (spin.value = 1)}
                textStyle={cardData.cardTextStyle}
                cardStyle={cardData.cardStyle}
            />
        </Animated.View>
    </View>
  );
};

export default RotatableCard;

const Styles = StyleSheet.create({
    front: {
      position: "absolute",
    },
    back: {
      backfaceVisibility: "hidden",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },
  });