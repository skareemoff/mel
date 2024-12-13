import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { ImageBackground, View, Image, TouchableOpacity, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { captureRef } from 'react-native-view-shot';
import { Appbar } from 'react-native-paper';
import Share from 'react-native-share';
import {BOTTOM_APPBAR_HEIGHT} from './Utils'
import SwipableCard from './SwipableCard';
import DeckData from './DeckData'
import {specialShuffle} from './Utils'
import st from '../assets/style'
import { ShareableCard } from './ShareableCard';

configureReanimatedLogger({ level: ReanimatedLogLevel.warn, strict: false });

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
      animatedValue.value = 0;
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView edges={['right', 'left']} style={st.container}>
        <ImageBackground
          source={DeckData.getDeckImage(deckData.deckBackground)}
          style={{ height: '100%', width: '100%'}}
        >
          <View
            style={[st.cardContainer, {paddingTop: Math.max(insets.top, 100), }]}
            key={deckKey}>
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
          <Appbar style={[ st.appbarBottom, { bottom: -60, height: BOTTOM_APPBAR_HEIGHT + insets.top }]} safeAreaInsets={{ insets }} >
            <TouchableOpacity style={st.roundButton} onPress={toggleFavourite}>
              <Image name="heart" style={st.roundButtonImage} source={require("../assets/images/like.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={st.roundButton} onPress={shareSnapshot}>
              <Image name="share" style={st.roundButtonImage} source={require("../assets/images/share.png")} />
            </TouchableOpacity>
            {/* TODO: Reset doesn't redraw properly */}
            <TouchableOpacity style={st.roundButton} onPress={() => handleSetCurrentIndex(-1)}>
              <Image name="restart" style={st.roundButtonImage} source={require("../assets/images/undo.png")} />
            </TouchableOpacity>
          </Appbar>
        </ImageBackground>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
