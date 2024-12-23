import { Image, TouchableOpacity, Text, Animated} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { useRef, useState } from "react";
import Card from './Card'
import DeckData from "./DeckData";

const RevealableCard = () => {
  const [isShowRevealButton, setIsShowRevealButton] = useState(!DeckData.isRevealedToday());
  const [cardKey, setCardKey] = useState(DeckData.getQoDRevealedCount());

  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = { opacity: opacityAnimation };

  const clickReveal = () => {
    DeckData.revealQoD(updateRevealed);

    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
    });
  }

  const updateRevealed = (revealed) => {
    setIsShowRevealButton(false);
    setCardKey(prevKey => prevKey + 1);
  }

  return (
    <>
        <Animated.View key={cardKey} style={[st.face]}>
            <Card
                type='card'
                deckID='qod'
                deckName='Question of the day'
                height='full'

                text={ DeckData.getQuestionOfTheDay() }
                infoLeft={DeckData.getQoDRevealedCount() < 1 ? 'be the first to reveal' : DeckData.getQoDRevealedCount() + ' reflecting'}
                infoRight={DeckData.getQoDTTLHours() + ' H'}

                deckTextStyle='qODDeckText'
                cardTextStyle='qODCardText'
                deckStyle='qODDeck'
                cardStyle='qODCard'
                infoTextStyleLeft='qODInfoTextLeft'
                infoTextStyleRight='qODInfoTextRight'
                />
            {isShowRevealButton ?
            <Animated.View name="cover" style={[st.cover, opacityStyle, st.cardBlur ]} >
                <Image source={require('../assets/images/qodmask-small.png')} style={st.blurImage} />
                <TouchableOpacity style={[st.revealButton, st.shadow]} onPressOut={() => clickReveal()}>
                  <Text style={st.revealButtonText} source={require("../assets/images/button-play.png")}>Reveal</Text>
                </TouchableOpacity>
              </Animated.View>
            :
            null
            }
        </Animated.View>
    </>
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
    border: 1,
    borderRadius: 40,
    width: 161,
    height: 84,
    backgroundColor: "white",
  },
  revealButtonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 28,
    wordWrap: 'break-word',
    textAlign: "center",
    fontWeight: 300,
    fontFamily: "DMSans",
  }
});
