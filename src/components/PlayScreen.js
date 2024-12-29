import { View, Image, TouchableOpacity, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { captureRef } from 'react-native-view-shot';
import { Appbar } from 'react-native-paper';
import Share from 'react-native-share';
import SwipableCard from './SwipableCard';
import {specialShuffle, CARD_FULL} from './Utils'
import styles, {height, width} from '../assets/style'
import { ShareableCard } from './ShareableCard';
import { HeaderBar } from './HeaderBar';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SvgXml } from 'react-native-svg';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import {MELContext} from './MELContext'
import {ID_FAVOURITES} from './DeckData';

export default function PlayScreen({route, navigation}) {
  useKeepAwake();

  const {dd, setFavouriteState} = React.useContext(MELContext);

  const MAX = 3;
  const { deckID } = route.params;
  const deckData = dd.getDeck(deckID);
  const cardDeck = useSharedValue(specialShuffle(deckData.cards));
  const viewShotRef = useRef(null);
  const [deckKey, setDeckKey] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    updateVisibleCards();
  }, [currentIndex]);

  const updateVisibleCards = () => {
    const visible = cardDeck.value.slice(currentIndex, currentIndex + MAX).map((item, index) => ({
        ...item,
        index: currentIndex + index,
      }));
    setVisibleCards(visible);
  };

  const toggleFavourite = () => {
    const cardID = cardDeck.value[currentIndex].id;
    if(dd.isFavourite(cardID)) {
      dd.removeFavourite(cardID);
    }
    else {
      dd.addFavourite(cardID);
    }
    setFavouriteState(prevKey => prevKey + 1);
  };

  const handleSetCurrentIndex = (newIndex) => {
    if(newIndex == -1 && currentIndex > 0) {
      // go back one
      setCurrentIndex(currentIndex-1);
      setDeckKey(prevKey => prevKey + 1);
      animatedValue.value = currentIndex;
    }
    else if(newIndex > 0) {
      if(newIndex < cardDeck.value.length) {
        // progress one forward
        setCurrentIndex(newIndex);
      }
      else {
        // reached the end of the deck
        cardDeck.value = specialShuffle(cardDeck.value);
        animatedValue.value = 0;
        setDeckKey(prevKey => prevKey + 1);
        setCurrentIndex(0);
      }
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
      <View style={styles.container}>
      {deckData.deckBackgroundSvg && dd.getDeckImageSvg(deckData.deckBackgroundSvg, CARD_FULL) &&
      <SvgXml
          xml={dd.getDeckImageSvg(deckData.deckBackgroundSvg, CARD_FULL)}
          width={width}
          height={height}
          preserveAspectRatio="xMinYMin slice"
          style={{
            backgroundColor: deckData.deckBackgroundColor ? deckData.deckBackgroundColor : 'white',
            zIndex: 0,
            position: 'absolute',
            overflow: 'hidden'
        }}/>
      }
        <HeaderBar showBackButton={true} navigation={navigation} />
        <View key={deckKey} style={stl.cardContainer} >
            {visibleCards.map((item) => {
              return (
                <SwipableCard
                  deckName={dd.getDeckName(item.deckID)}
                  item={item}
                  infoLeft={(1+currentIndex)+' / ' + cardDeck.value.length}
                  infoTextStyleLeft={item.type == 'special' ?  item.infoTextStyleLeft : 'playInfoText'}
                  index={item.index}
                  deckSize={cardDeck.value.length}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={handleSetCurrentIndex}
                  key={item.index}
                />
              )
            })}
          </View>
          <Modal
            visible={shareModalVisible}
            onRequestClose={() => setShareModalVisible(false)}
            transparent={false}
            presentationStyle='fullScreen'
            animationType='none'>
            <ShareableCard
              deckData={deckData}
              cardDeck={cardDeck}
              currentIndex={currentIndex}
              viewShotRef={viewShotRef}
              navigation={navigation}
            />
          </Modal>
          <Appbar style={[
            styles.appbarBottom,
            {
              backgroundColor: 'transparent',
              position: 'absolute',
              top: height - 94,
              left: 0,
              width: width,
            }]}>

            {currentIndex > 0 ?
              <TouchableOpacity style={stl.roundButton} onPress={() => handleSetCurrentIndex(-1)}>
                <Image name="restart" style={stl.roundButtonImage} source={require("../assets/images/undo.png")} />
              </TouchableOpacity>
            : <View style={[stl.roundButton, {filter: "brightness(40%)", backgroundColor: 'transparent'}]}>
                <Image name="restart" style={stl.roundButtonImage} source={require("../assets/images/undo.png")} />
              </View>
            }

            {cardDeck.value.length > 0 && cardDeck.value[currentIndex].type!='special'
              ? <TouchableOpacity style={stl.roundButton} onPress={toggleFavourite}>
                  <Image name="heart" style={stl.roundButtonImage} source={
                    dd.isFavourite(cardDeck.value[currentIndex].id)
                      ? require("../assets/images/like-filled.png")
                      : require("../assets/images/like.png")
                  }
                />
              </TouchableOpacity>
              : <View style={[stl.roundButton, {filter: "brightness(40%)", backgroundColor: 'transparent'}]}>
                  <Image name="heart" style={stl.roundButtonImage} source={require("../assets/images/like.png")}/>
                </View>
            }

            {cardDeck.value.length > 0
            ? <TouchableOpacity style={stl.roundButton} onPress={shareSnapshot}>
                <Image name="share"   style={stl.roundButtonImage} source={require("../assets/images/share.png")} />
              </TouchableOpacity>
            : <View style={[stl.roundButton, {filter: "brightness(40%)", backgroundColor: 'transparent'}]}>
                  <Image name="share"   style={stl.roundButtonImage} source={require("../assets/images/share.png")} />
                </View>
        }
          </Appbar>
      </View>
    </GestureHandlerRootView>
  )
}

const stl = EStyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  roundButton: {
    borderRadius: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
  },
  roundButtonImage: {
    height: 72,
    width: 72,
  }
});