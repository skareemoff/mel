import React from 'react';
import { Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import ShareableView from './ShareableView'
import DeckData from './DeckData.js'
import styles from '../assets/style'
import stl from './cardStyle'
import {calculateCardHeight} from './Utils'
import { SvgXml } from 'react-native-svg';

/**
 * Possible card parameters:
 *
 * height ('full', 'half')
 * shareable ('yes, 'no')
 * useMarkdown ('yes, 'no')
 * deckName
 * deckSubText
 * text
 * subText
 * infoLeft
 * infoRight
 *
 * deckTextStyle
 * deckSubTextStyle
 * cardTextStyle
 * cardSubTextStyle
 * infoTextStyleLeft
 * infoTextStyleRight
 * cardStyle
 * deckBackgroundSvg
 * deckBackgroundColor
 *
 */
const Card = (cardData) => {
    const cardHeight = calculateCardHeight(cardData);

    const buildCard = () => {
        const cardContent = cardData.shareable == 'yes'
        ? ( <ShareableView cardData={cardData} /> )
        : (
            <>
                <View style={[stl.top]}>
                    <View style={[stl.cardHeader]}>
                        <Text style={[stl.deckName, styles[cardData.deckTextStyle]]}>{cardData.deckName}</Text>
                        {cardData.deckSubText && <Text style={[stl.deckSubText, styles[cardData.deckSubTextStyle]]}>{cardData.deckSubText}</Text>}
                    </View>
                </View>
                {cardData.useMarkdown == 'yes'
                ? (
                    <View style={stl.middle}>
                        {cardData.text && <Markdown style={styles[cardData.cardTextStyle]}>{cardData.text}</Markdown>}
                        {cardData.subText && cardData.subText && <Markdown style={styles[cardData.cardSubTextStyle]}>{cardData.subText}</Markdown>}
                    </View>
                )
                : (
                    <View style={stl.middle}>
                        <Text style={[stl.cardText, styles[cardData.cardTextStyle]]}>{cardData.text}</Text>
                        {cardData.subText && <Text style={[stl.cardSubText, styles[cardData.cardSubTextStyle]]}>{cardData.subText}</Text>}
                    </View>
                )}
                <View style={[stl.bottom]}>
                    <Text style={[stl.footerText, stl.footerTextLeft, styles[cardData.infoTextStyleLeft]]}>{cardData.infoLeft}</Text>
                    <Text style={[stl.footerText, stl.footerTextRight, styles[cardData.infoTextStyleRight]]}>{cardData.infoRight}</Text>
                </View>
            </>
        );

        return (
            <View style={[
                stl.card,
                styles.shadow,
                styles[cardData.cardStyle],
                cardHeight == 'full' ? stl.cardFull : stl.cardHalf,
            ]}>
                {cardData.deckBackgroundSvg &&
                    <SvgXml xml={DeckData.getDeckImageSvg(cardData.deckBackgroundSvg)}
                        width='100%'
                        height='100%'
                        preserveAspectRatio="xMinYMin slice"
                        style={
                        {
                            position: 'absolute',
                            borderRadius: 30,
                            zIndex: 0,
                            overflow: 'hidden',
                            backgroundColor: cardData.deckBackgroundColor ? cardData.deckBackgroundColor : 'white'
                        }}
                    />
                }
                { cardContent}
            </View>
        );
    };

        return buildCard()
};

export default Card;