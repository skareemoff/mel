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
            <View name="cover" style={[styles.cover, { height: calculateCardHeight(cardData), width: width * 0.9, marginHorizontal: width * 0.05 } ]} >
              <Image source={require('../assets/images/qodmask.png')} style={{ width: '100%', height: '100%' }} />
              <TouchableOpacity style={[{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]} onPressOut={() => clickReveal()}>
                <Text style={styles.revealButton} source={require("../assets/images/button-play.png")} >Reveal </Text>
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
    backgroundColor: 'white',
    position: "absolute",
    borderRadius: 20,
    maxWidth: 400,
    zIndex: 1,
    top: 0,
    opacity: 1,
  },
  revealButton: {
    textAlign: "center",
    justifyContent: 'center',
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2 },
    width: 120,
    height: 60,
    backgroundColor: "white",
    color: "black",
    fontFamily: "DM Sans",
    fontSize: 24,
  }
});
