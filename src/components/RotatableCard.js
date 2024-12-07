import { View, StyleSheet} from "react-native";
import React from "react";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import Card from './Card'

const RotatableCard = (cardData) => {
  const spin = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 1500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 1500 }),
        },
      ],
    };
  }, []);

  const _handleClick = (externalHandler) => {
    spin.value = spin.value ? 0 : 1;
  }

  return (
    <View>
        <Animated.View style={[Styles.front, rStyle]}>
            <Card
                type='deck'
                height={cardData.height}
                deckID={cardData.id}
                text={cardData.deckName}
                deckBackground={cardData.deckBackground}
                cardTextStyle={cardData.deckTextStyle}
                cardStyle={cardData.deckStyle}
                clickHandler={() => _handleClick()}
            />
        </Animated.View>
        <Animated.View style={[Styles.back, bStyle]}>
            <Card
                type='card'
                height={cardData.height}
                deckID={cardData.id}
                deckName={cardData.deckName}
                text={cardData.text}
                cardTextStyle={cardData.cardTextStyle}
                cardStyle={cardData.cardStyle}
                clickHandler={() => (_handleClick(cardData.cardClickHandler))}
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