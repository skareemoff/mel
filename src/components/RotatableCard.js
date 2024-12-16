import { View, StyleSheet} from "react-native";
import React from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming, withSequence, runOnJS } from "react-native-reanimated";
import Card from './Card'

const RotatableCard = (cardData) => {
  const spin = useSharedValue(0);
  const [showBack, setShowBack] = React.useState(false);

  const toggleBackView = () => {
    setShowBack(prev => !prev);
  };

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: `${spinVal}deg`,
        },
      ],
      opacity: interpolate(spin.value, [0, 0.5, 1], [1, 0, 0]),
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: `${spinVal}deg`,
        },
      ],
      opacity: interpolate(spin.value, [0, 0.5, 1], [0, 0, 1]),
    };
  }, []);

  const _handleClick = () => {
    const newValue = spin.value >= 1 ? 0 : 1;
    spin.value = withSequence(
      withTiming(0.5, { duration: 450 }, () => {
        runOnJS(toggleBackView)();
      }),
      withTiming(newValue, { duration: 450 })
    );
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
                clickHandler={() => (_handleClick())}
            />
        </Animated.View>
    </View>
  );
};

export default RotatableCard;

const Styles = StyleSheet.create({
    front: {
      position: "absolute",
      backfaceVisibility: "hidden",
    },
    back: {
      backfaceVisibility: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
});