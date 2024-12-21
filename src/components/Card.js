import React from 'react';
import { Text, View, Pressable, ImageBackground, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';
import ShareableView from './ShareableView'
import DeckData from './DeckData.js'
import styles from '../assets/style'
import stl from './cardStyle'
import {calculateCardHeight, SVG_CONN} from './Utils'
import { SvgXml } from 'react-native-svg';

const Card = (cardData) => {
    const cardHeight = calculateCardHeight(cardData);

    const buildCard = () => {
        const img = (typeof(cardData.deckBackground) !== 'undefined' && cardData.deckBackground != null)
            ? DeckData.getDeckImage(cardData.deckBackground)
            : null;

        const cardContent = cardData.shareable == 'yes'
        ? ( <ShareableView cardData={cardData} /> )
        : (
            <>
                <View style={[stl.top]}>
                    {cardData.isFavourite == 'yes' ? (
                        <Image
                            source={require('../assets/images/like.png')}
                            style={stl.likeIcon}
                        />
                    ) : null}
                    <View style={[stl.cardHeader]}>
                        <Text style={[stl.deckName, styles[cardData.deckTextStyle]]}>{cardData.deckName}</Text>
                        <Text style={[stl.deckSubText, styles[cardData.deckSubTextStyle]]}>{cardData.deckSubText}</Text>
                    </View>
                </View>
                {cardData.useMarkdown == 'yes'
                ? (
                    <View style={stl.middle}>
                        {cardData.text && <Markdown style={styles[cardData.cardTextStyle]}>{cardData.text}</Markdown>}
                        {cardData.subText && <Markdown style={styles[cardData.cardSubTextStyle]}>{cardData.subText}</Markdown>}
                    </View>
                )
                : (
                    <View style={stl.middle}>
                        <Text style={[stl.cardText, styles[cardData.cardTextStyle]]}>{cardData.text}</Text>
                        <Text style={[stl.cardSubText, styles[cardData.cardSubTextStyle]]}>{cardData.subText}</Text>
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
                {img
                ?   (
                        <ImageBackground source={img} imageStyle={{ borderRadius: 30}} style={{ height: '100%', width: '100%' }}>
                            {cardContent}
                        </ImageBackground>
                    )
                :   ( cardContent )}
            </View>
        );
    };

        return buildCard()
};

export default Card;