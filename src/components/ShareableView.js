import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/style'
import stl from './cardStyle'

const ShareableView = (cardData) => {
    return (
        <>
        <View style={[stl.top, stl.shotTop]}>
        <View style={[stl.cardHeader, stl.shotCardHeader]}>
            <Text style={[stl.deckName, styles[cardData.deckTextStyle], stl.shotDeckName]}>{cardData.deckName}</Text>
            <Text style={[stl.deckSubText, styles[cardData.deckSubTextStyle], stl.shotDeckSubText]}>{cardData.deckSubText}</Text>
        </View>
        </View>
        <View style={[stl.middle, stl.shotMiddle]}>
        <Text style={[stl.cardText, styles[cardData.cardTextStyle], stl.shotCardText]}>{cardData.text}</Text>
        <Text style={[stl.cardSubText, styles[cardData.cardSubTextStyle], stl.shotCardSubText]}>{cardData.subText}</Text>
        <View style={stl.shotCommentBox}></View>
        </View>
        <View style={[stl.bottom, stl.shotBottom]}>
        <Text style={[stl.footerText, stl.footerTextLeft, styles[cardData.infoTextStyleLeft], stl.shotFooterTextLeft]}>{cardData.infoLeft}</Text>
        <Text style={[stl.footerText, stl.footerTextRight, styles[cardData.infoTextStyleRight], stl.shotFooterTextRight]}>{cardData.infoRight}</Text>
        </View>
        </>
    );
};

export default ShareableView;