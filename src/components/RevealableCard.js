import { View, Image, TouchableOpacity, Text, Animated} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { useRef, useState } from "react";
import Card from './Card'
import styles from '../assets/style'


const RevealableCard = (cardData) => {
  const [isShowRevealButton, setIsShowRevealButton] = useState(true);
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = { opacity: opacityAnimation };

  const clickReveal = () => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      setIsShowRevealButton(false);
    })
  }

  return (
    <View stylele={styles.container}>
        <Animated.View style={[st.face]}>
            <Card
                type='card'
                height={cardData.height}
                deckID={cardData.id}
                deckName={cardData.deckName}
                text={cardData.text}
                cardTextStyle={cardData.cardTextStyle}
                cardStyle={cardData.cardStyle}
                subText={cardData.subText}
                cardSubTextStyle={cardData.cardSubTextStyle}
                deckTextStyle={cardData.deckTextStyle}
                deckSubTextStyle={cardData.deckSubTextStyle}
            />
            {isShowRevealButton ?
            <Animated.View name="cover" style={[st.cover, opacityStyle, st.cardBlur ]} >
                <Image source={require('../assets/images/qodmask-small.png')} style={st.blurImage} />
                <TouchableOpacity style={[st.revealButton, st.shadow]} onPressOut={() => clickReveal()}>
                  <Text style={st.revealButtonText} source={require("../assets/images/button-play.png")} >Reveal </Text>
                </TouchableOpacity>
              </Animated.View>
            :
            null
            }
        </Animated.View>
    </View>
  );
};

export default RevealableCard;

const st = EStyleSheet.create({
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
  },
  cardBlur: {
    width: 333,
    height: 442,
    borderRadius: 20,
    backgroundColor: 'rgba(238, 238, 238, 0.35)'
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
    borderRadius: '2.5rem',
    width: '10.0625rem',
    height: '5.25rem',
    backgroundColor: "white",
  },
  revealButtonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 28,
    wordWrap: 'break-word',
    textAlign: "center",
    fontFamily: "DMSans-Light",
  }
});
