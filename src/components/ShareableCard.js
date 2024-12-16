import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewShot from 'react-native-view-shot';
import DeckData from './DeckData';
import st from '../assets/style'
import Card from './Card';

export const ShareableCard = ({deckData, cardDeck, currentIndex, viewShotRef, setShareModalVisible}) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView edges={['right', 'left']} style={st.container}>
            <ViewShot ref={viewShotRef} collapsable={false} style={styles.fullScreen}>
                <ImageBackground
                    source={DeckData.getDeckImage(deckData.deckBackground)}
                    style={styles.fullScreen}>
                    <Image source={require('../assets/images/logo.png')} style={{width:'72', height: 32, marginBottom: '40'}}/>
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
                        cardStyle={st.shareableCard}
                        infoLeft='More Exciting Life'
                        infoTextStyleLeft='shareableInfoLeft'
                        shareable='yes'
                    />
                </ImageBackground>
            </ViewShot>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});