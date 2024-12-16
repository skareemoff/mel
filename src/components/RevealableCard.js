import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import Card from './Card'
import st from '../assets/style'
import { width, calculateCardHeight } from "./Utils";


const RevealableCard = (cardData) => {
  const [isShowRevealButton, setIsShowRevealButton] = useState(true);
  const clickReveal = () => {
    setIsShowRevealButton(false);
  }

  return (
    <View stylele={st.container}>
        <Animated.View style={[styles.face]}>
            <Card
                type='card'
                height={cardData.height}
                deckID={cardData.id}
                deckName={cardData.deckName}
                text={cardData.text}
                cardTextStyle={cardData.cardTextStyle}
                cardStyle={cardData.cardStyle}
            />
            {isShowRevealButton ?
            <View name="cover" style={[styles.cover, { height: calculateCardHeight(cardData) * 0.8, width: width * 0.85 } ]} >
                <Image source={require('../assets/images/qodmask-small.png')} style={styles.blurImage} />
                <TouchableOpacity style={[styles.revealButton, styles.shadow]} onPressOut={() => clickReveal()}>
                  <Text style={styles.revealButtonText} source={require("../assets/images/button-play.png")} >Reveal </Text>
                </TouchableOpacity>
              </View>
            :
            null
            }
        </Animated.View>
    </View>
  );
};

export default RevealableCard;

const styles = StyleSheet.create({
  face: {
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    flex: 1,
    backgroundColor: 'transparent',
    position: "absolute",
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxWidth: 400,
    zIndex: 1,
    top: 0,
    opacity: 1,
  },
  blurImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
  },
  revealButton: {
    justifyContent: 'center',
    borderRadius: 24,
    width: 120,
    height: 60,
    backgroundColor: "white",
  },
  revealButtonText: {
    textAlign: "center",
    justifyContent: 'center',
    color: "black",
    fontFamily: "DM Sans",
    fontSize: 24,
  }
});
