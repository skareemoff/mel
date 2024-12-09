import React from 'react';
import { ImageBackground, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity onPress={() => setShareModalVisible(false)}>
                    <ImageBackground
                        source={DeckData.getDeckImage(deckData.deckBackground)}
                        style={styles.fullScreen}>
                        <Card
                            type='card'
                            deckName={deckData.deckName}
                            text={cardDeck.value[currentIndex].text}
                            subText={cardDeck.value[currentIndex].subText}
                            height={cardDeck.value[currentIndex].height}
                            useMarkdown={cardDeck.value[currentIndex].useMarkdown}
                            deckTextStyle={cardDeck.value[currentIndex].deckTextStyle}
                            deckSubTextStyle={cardDeck.value[currentIndex].deckSubTextStyle}
                            cardTextStyle={cardDeck.value[currentIndex].cardTextStyle}
                            cardSubTextStyle={cardDeck.value[currentIndex].cardSubTextStyle}
                            cardStyle={st.shareableCard}
                            infoTextStyleLeft={cardDeck.value[currentIndex].infoTextStyleLeft}
                            infoTextStyleRight={cardDeck.value[currentIndex].infoTextStyleRight}
                            shareable='yes'
                        />
                    </ImageBackground>
                </TouchableOpacity>
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