import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ViewShot from 'react-native-view-shot';
import DeckData from './DeckData';
import styles from '../assets/style'
import Card from './Card';
import { SvgXml } from 'react-native-svg';

export const ShareableCard = ({deckData, cardDeck, currentIndex, viewShotRef, setShareModalVisible}) => {

    return (
        <View edges={['right', 'left']} style={[styles.container, {backgroundColor: 'transparent'}]}>
            <ViewShot ref={viewShotRef} collapsable={false} style={stl.fullScreen}>
                <SvgXml
                    xml={DeckData.getDeckImageSvg(deckData.deckBackgroundSvg)}
                    width='100%'
                    height='100%'
                    preserveAspectRatio="xMinYMin slice"
                    style={{
                        backgroundColor: deckData.deckBackgroundColor,
                        zIndex: 0,
                        position: 'absolute',
                        overflow: 'hidden'
                    }}
                />
                <Image source={require('../assets/images/logo.png')} style={[styles.logo, {top: -10}]}/>
                <Card
                    type='card'
                    deckName={DeckData.getDeckName(cardDeck.value[currentIndex].deckID)}
                    text={cardDeck.value[currentIndex].text}
                    subText={cardDeck.value[currentIndex].subText}
                    height={cardDeck.value[currentIndex].height}
                    useMarkdown={cardDeck.value[currentIndex].useMarkdown}
                    deckTextStyle={cardDeck.value[currentIndex].deckTextStyle}
                    deckSubTextStyle={cardDeck.value[currentIndex].deckSubTextStyle}
                    cardTextStyle={cardDeck.value[currentIndex].cardTextStyle}
                    cardSubTextStyle={cardDeck.value[currentIndex].cardSubTextStyle}
                    cardStyle={stl.shareableCard}
                    infoLeft='More Exciting Life'
                    infoTextStyleLeft='shareableInfoLeft'
                    shareable='yes'
                />
            </ViewShot>
        </View>
    );
}

const stl = EStyleSheet.create({
    fullScreen: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
