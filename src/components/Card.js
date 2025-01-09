import React from 'react';
import { Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import ShareableView from './ShareableView'
import styles from './style'
import stl from './cardStyle'
import {CARD_FULL, CARD_HALF} from './Utils'
import { SvgXml } from 'react-native-svg';
import {MELContext} from './MELContext'
import CardInfoBar from './CardInfoBar';

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
 * deckInfo
 * infoRight
 *
 * deckTextStyle
 * deckSubTextStyle
 * cardTextStyle
 * cardSubTextStyle
 * infoTextStyleRight
 * cardStyle
 * deckBackgroundSvg
 * deckBackgroundColor
 *
 */
const Card = (cardData) => {
    const {dd} = React.useContext(MELContext);

    const cardHeight = (typeof(cardData.height) !== 'undefined' && cardData.height != null)
    ? (cardData.height == CARD_FULL ? CARD_FULL : CARD_HALF)
    : ((cardData.type == 'card') ? CARD_FULL : CARD_HALF);


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
                    { cardData.deckInfo && <CardInfoBar data={cardData.deckInfo} height={cardHeight}/> }
                    <Text style={[stl.footerText, stl.footerTextRight, styles[cardData.infoTextStyleRight]]}>{cardData.infoRight}</Text>
                </View>
            </>
        );

        const bgColor = cardData.deckBackgroundColor ? cardData.deckBackgroundColor : 'white';
        return (
            <View style={[
                stl.card,
                styles.shadow,
                styles[cardData.cardStyle],
                cardHeight == CARD_FULL ? stl.cardFull : stl.cardHalf,
                {backgroundColor: bgColor}
            ]}>
                {cardData.deckBackgroundSvg && dd.getDeckImageSvg(cardData.deckBackgroundSvg, cardHeight) &&
                    <SvgXml
                        xml={dd.getDeckImageSvg(cardData.deckBackgroundSvg, cardHeight)}
                        width="100%"
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