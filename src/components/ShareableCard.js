import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ViewShot from 'react-native-view-shot';
import styles from './style'
import Card from './Card';
import { SvgXml } from 'react-native-svg';
import { HeaderBar } from './HeaderBar';
import { CARD_FULL } from './Utils';
import {MELContext} from './MELContext'

export const ShareableCard = ({deckData, cardDeck, currentIndex, viewShotRef}) => {
    const {dd} = React.useContext(MELContext);

    return (
        <View edges={['right', 'left']} style={[styles.container, {backgroundColor: 'transparent'}]}>
            <ViewShot ref={viewShotRef} collapsable={false} style={stl.fullScreen}>
                {deckData.deckBackgroundSvg && dd.getDeckImageSvg(deckData.deckBackgroundSvg, CARD_FULL) &&
                    <SvgXml
                        xml={dd.getDeckImageSvg(deckData.deckBackgroundSvg, CARD_FULL)}
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
                }
                <View style={{position:'absolute', top: 0}}>
                    <HeaderBar showBackButton={false} navigation={null} />
                </View>
                <Card
                    type='card'
                    deckName={dd.getDeckName(cardDeck.value[currentIndex].deckID)}
                    text={cardDeck.value[currentIndex].text}
                    subText={cardDeck.value[currentIndex].subText}
                    height={cardDeck.value[currentIndex].height}
                    useMarkdown={cardDeck.value[currentIndex].useMarkdown}
                    infoLeft='More Exciting Life'
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
