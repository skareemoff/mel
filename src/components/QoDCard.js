import { Image, TouchableOpacity, Text, Animated, StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { useRef, useState } from "react";
import Card from './Card'
import {MELContext} from './MELContext'
import notifee from "@notifee/react-native";
import { BlurView } from "expo-blur";

const QoDCard = () => {
  const {dd} = React.useContext(MELContext);

  const [isShowRevealButton, setIsShowRevealButton] = useState(!dd.isRevealedToday());
  const [cardKey, setCardKey] = useState(dd.getQoDRevealedCount());

  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = { opacity: opacityAnimation };

  const clickReveal = () => {
    dd.revealQoD(updateRevealed);
    notifee.setBadgeCount(0);
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {});
  }

  const updateRevealed = (revealed) => {
    setIsShowRevealButton(false);
    setCardKey(prevKey => prevKey + 1);
  }

  const getDeckInfo = () => {
    return [{'type': 'reflectingCount',  'info': dd.getQoDRevealedCount()+' reflecting'},];
  }

  return (
    <>
        <Animated.View key={cardKey} style={[st.face]}>
            <Card
                type='card'
                deckID='qod'
                deckName='Question of the day'
                height='full'

                text={ dd.getQuestionOfTheDay() }
                deckInfo={getDeckInfo()}
                infoRight={dd.getQoDTTLHours() + ' H'}

                deckTextStyle='qODDeckText'
                cardTextStyle='qODCardText'
                deckStyle='qODDeck'
                cardStyle='qODCard'
                infoTextStyleRight='qODInfoTextRight'
                infoBoxBlur={false}
                />
            {isShowRevealButton ?
            <Animated.View name="cover" style={[st.cover, opacityStyle, st.cardBlur ]} >
                <BlurView
                    intensity={20}
                    style={st.blurView}
                />
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

export default QoDCard;

const st = EStyleSheet.create({
  face: {
    alignItems: "center",
    justifyContent: "center",
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
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
    width: '100%',
    height: 442,
    borderRadius: 20,
  },
  revealButton: {
    justifyContent: 'center',
    border: 1,
    borderRadius: 40,
    borderTopColor: 'rgba(0, 0, 0, 0.17)',
    borderBottomColor: 'rgba(0, 0, 0, 0.17)',
    borderRightColor: 'rgba(0, 0, 0, 0.17)',
    borderLeftColor: 'rgba(0, 0, 0, 0.17)',
    width: 161,
    height: 84,
    backgroundColor: "#F9F9F9",
  },
  revealButtonText: {
    color: 'black',
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "DMSans-Regular",
  }
});
