import { ImageBackground, View, Image, TouchableOpacity, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState, useEffect, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { captureRef } from 'react-native-view-shot';
import { Appbar } from 'react-native-paper';
import Share from 'react-native-share';
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import {BOTTOM_APPBAR_HEIGHT, specialShuffle} from './Utils'
import styles from '../assets/style'
import { ShareableCard } from './ShareableCard';
import { HeaderBar } from './HeaderBar';
import EStyleSheet from 'react-native-extended-stylesheet';
// import KeepAwake from '@sayem314/react-native-keep-awake';

export default function PlayScreen({route, navigation}) {
  const MAX = 3;
  const { deckID } = route.params;
  const insets = useSafeAreaInsets();
  const viewShotRef = useRef(null);

  const deckData = DeckData.getDeck(deckID);
  const cardDeck = useSharedValue(specialShuffle(deckData.cards));
  const [visibleCards, setVisibleCards] = useState([]);

  const [deckKey, setDeckKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);

  const [shareModalVisible, setShareModalVisible] = useState(false);

  useEffect(() => {
    updateVisibleCards();
  }, [currentIndex]);

  const updateVisibleCards = () => {
    const visible = cardDeck.value.slice(currentIndex, currentIndex + MAX + 1).map((item, index) => ({
        ...item,
        index: currentIndex + index,
      }));
    setVisibleCards(visible);
  };

  const toggleFavourite = () => {
    const cardID = cardDeck.value[currentIndex].id;
    if(DeckData.isFavourite(cardID)) {
      DeckData.removeFavourite(cardID);
    }
    else {
      DeckData.addFavourite(cardID);
    }
    setCurrentIndex(currentIndex);
    updateVisibleCards();
  };

  const handleSetCurrentIndex = (newIndex) => {
    if(newIndex == -1) {
      if(currentIndex != 0 ) {
        cardDeck.value = specialShuffle(cardDeck.value);
        setCurrentIndex(0);
        animatedValue.value = 0;
        setDeckKey(prevKey => prevKey + 1);
        updateVisibleCards();
      }
    }
    else if(newIndex >= cardDeck.value.length) {
      cardDeck.value.splice(0, cardDeck.value.length, cardDeck.value);
      setCurrentIndex(0);
      setDeckKey(prevKey => prevKey + 1);
      updateVisibleCards();
    }
    else {
      setCurrentIndex(newIndex);
      updateVisibleCards();
    }
  };

  const shareSnapshot = async () => {
    try {
      setShareModalVisible(true);
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (!viewShotRef.current) {
        console.error('ViewShot ref is not ready');
        return;
      }

      const snapshot = await captureRef(viewShotRef.current, {
        result: 'data-uri',
        quality: 1,
        format: 'png'
      });

      await Share.open({ url: snapshot });
      setShareModalVisible(false);
    } catch (error) {
      setShareModalVisible(false);
    };
  };

  return (
    <GestureHandlerRootView>
      <View edges={['right', 'left']} style={styles.container}>
        {/* <KeepAwake /> */}
        <ImageBackground
          source={DeckData.getDeckImage(deckData.deckBackground)}
          style={{ height: '100%', width: '100%'}} >
        <HeaderBar isHomeScreen={false} navigation={navigation} />
        <View style={[styles.cardContainer, {top: 160,paddingTop: Math.max(insets.top, 100), }]} key={deckKey}>
            {visibleCards.map((item) => {
              return (
                <SwipableCard
                  deckName={DeckData.getDeckName(item.deckID)}
                  maxVisibleItems={MAX}
                  item={item}
                  index={item.index}
                  deckSize={cardDeck.value.length}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={handleSetCurrentIndex}
                  key={item.index}
                />
              );
            })}
          </View>
          <Modal
            visible={shareModalVisible}
            onRequestClose={() => setShareModalVisible(false)}
            transparent={true}
            animationType="none"
            style={{ margin: 0 }}
          >
            <ShareableCard
              deckData={deckData}
              cardDeck={cardDeck}
              currentIndex={currentIndex}
              viewShotRef={viewShotRef}
              setShareModalVisible={setShareModalVisible}
            />
          </Modal>
          <Appbar style={[ styles.appbarBottom, { bottom: -60, height: BOTTOM_APPBAR_HEIGHT + insets.top, backgroundColor: 'transparent' }]} safeAreaInsets={{ insets }} >
            <TouchableOpacity style={stl.roundButton} onPress={toggleFavourite}>
              <Image name="heart" style={stl.roundButtonImage} source={require("../assets/images/like.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={stl.roundButton} onPress={shareSnapshot}>
              <Image name="share" style={stl.roundButtonImage} source={require("../assets/images/share.png")} />
            </TouchableOpacity>
            {/* TODO: Reset doesn't redraw properly */}
            <TouchableOpacity style={stl.roundButton} onPress={() => handleSetCurrentIndex(-1)}>
              <Image name="restart" style={stl.roundButtonImage} source={require("../assets/images/undo.png")} />
            </TouchableOpacity>
          </Appbar>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
}

const stl = EStyleSheet.create({
    roundButton: {
        borderRadius: "50%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft: 20,
        marginRight: 20,
      },
    roundButtonImage: {
        height: 60,
        width: 60,
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
});