import { TouchableOpacity, Text, Animated, StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { useContext, useEffect, useRef, useState } from "react";
import analytics from '@react-native-firebase/analytics';
import notifee from "@notifee/react-native";
import { BlurView } from "expo-blur";
import Card from './Card'
import { qodD } from "./QuestionOfTheDayData";
import styles from './style'
import { MELContext } from "./MELContext";

const QoDCard = () => {
  const [isShowRevealButton, setIsShowRevealButton] = useState(!qodD.isRevealedToday());
  const [dataKey, setDataKey] = useState(0);
  const {questionOfTheDayState, setQuestionOfTheDayState} = useContext(MELContext);

  useEffect(() => {
    setDataKey(prevKey => prevKey + 1);
  }, [questionOfTheDayState]);


  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const opacityStyle = { opacity: opacityAnimation };

  const clickReveal = () => {
    async () => await analytics().logEvent('reveal');

    qodD.revealQoD(updateRevealed);
    notifee.setBadgeCount(0);

    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {});
  }

  const updateRevealed = (revealed) => {
    setIsShowRevealButton(false);
    setDataKey(prevKey => prevKey + 1);
  }

  const getDeckInfo = () => {
    return [{'type': 'reflectingCount',  'info': qodD.getQoDRevealedCount()+' reflecting'},];
  }

  return (
    <>
        <Animated.View key={dataKey} style={[styles.flatListItem, st.face]}>
            <Card
                type='card'
                deckID='qod'
                deckName='Question of the day'
                height='full'

                text={ qodD.getQuestionOfTheDay(setQuestionOfTheDayState) }
                deckInfo={getDeckInfo()}
                infoRight={qodD.getQoDTTLHours() + ' H'}

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
    borderRadius: 20,
    width: '$cardWidth - 40',
    height: '$cardHeightFull - 128',
    top: 0,
    left: 0,
    marginBottom: 64,
    marginTop: 64,
    marginHorizontal: 20,
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
    marginBottom: 54
  },
  revealButtonText: {
    color: 'black',
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "DMSans-Regular",
  }
});
