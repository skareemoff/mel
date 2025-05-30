import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, Pressable, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Appbar } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import Card from './Card';
import styles, { height } from './style'
import {HALF_CARD_HEIGHT} from './style'
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'
import uuid from 'react-native-uuid';

const DeckInfoScreen = ({route, navigation}) => {
    const {dd} = React.useContext(MELContext);
    const { deckID } = route.params;
    const deckData = dd.getDeck(deckID);
    const descrColor = deckData.deckBackgroundColor ? deckData.deckBackgroundColor : 'darkGrey'
    const [screenKey, setScreenKey] = useState(0);
    const cards = [
        {'id': 'header'},
        {'id': 'deck'},
        {'id': 'description'},
        {'id': 'example'},
        {'id': 'rules'}
    ];

    const descrStyle = function(deckColor) {
        return {
            body: {
                fontFamily: "DMSerifText-Regular",
                backgroundColor: 'transparent',
            },
            blockquote: {
                fontFamily: "DMSerifText-Regular",
                fontWeight: 400,
                fontSize: 24,
                lineHeight: 28,
                paddingLeft: 10,
                marginLeft: 30,
                marginRight: 30,
                borderLeftWidth: 10,
                backgroundColor: 'transparent',
                borderLeftColor: deckColor
            },
        };
    };

    const clickDeck = () => {
        const playSessionID = uuid.v4();
        navigation.navigate('Play', { deckID: deckID, playSessionID: playSessionID });
    };

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (<HeaderBar showBackButton={true} navigation={navigation} />)
            case 'deck':
                return(
                    <View style={styles.flatListItem}>
                        {deckData.isLocked &&
                            <Image source={require("../assets/images/button-small-lock.png")} style={{
                                height: 42,
                                width: 42,
                                top: 12,
                                right: 12,
                                zIndex: 1,
                                position: 'absolute',
                                backgroundColor: 'transparent'
                            }}/>
                        }
                        <Card
                            type='deck'
                            text={deckData.deckName}
                            deckInfo={dd.getDeckInfo(deckData)}
                            cardTextStyle={deckData.deckTextStyle}
                            deckBackgroundSvg={deckData.deckBackgroundSvg}
                            deckBackgroundColor={deckData.deckBackgroundColor}
                            cardSubTextStyle={deckData.cardSubTextStyle}/>
                    </View>
                )
            case 'description':
                return (
                    <View style={styles.flatListItem}>
                        { deckData.description &&
                            <Markdown style={descrStyle(descrColor)}>{deckData.description}</Markdown>
                        }
                    </View>
                )
            case 'example':
                return (
                    <View style={styles.flatListItem}>
                        <Card
                            type='card'
                            height='half'
                            deckName={dd.getDeckName(deckData.id)}
                            text={deckData.cards.length > 0 ? deckData.cards[0].text : deckData.exampleText }
                            deckTextStyle='exampleDeckTitle'
                            cardTextStyle='exampleDeckText'
                            cardStyle='deckInfoCard'
                            infoRight='Example'
                            infoTextStyleRight='exampleInfoRight'
                        />
                    </View>
                )
            case 'rules':
                return (
                <View style={{top: 60}}>
                    { deckData.rules &&
                        <Markdown style={stl.deckInfoRules}>{deckData.rules}</Markdown>
                    }
                </View> )
            default:
                return null;
        }
    }

    return (
        <View>
            <FlatList
                style={[styles.flatList]}
                data={cards}
                key={screenKey}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                contentContainerStyle={{
                    paddingBottom: HALF_CARD_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                ItemSeparatorComponent={() => <View style={{height: 20}} />}
                showsVerticalScrollIndicator={false}
                bounces={false} // Prevent overscrolling past the first card
                snapToAlignment="start"
                decelerationRate="fast"
            />
            <Appbar style={[ styles.appbarBottom, { position: 'absolute', top: height - 118, backgroundColor: 'transparent'} ] } >
            {(
                deckData.cards.length > 0
                ?   <Pressable style={[stl.playButton]} onPressOut={() => clickDeck()}>
                        <Text style={stl.playButtonText}>Play</Text>
                    </Pressable>
                : <View style={stl.playButtonDimmed}><Text style={[stl.playButtonText]}>Play</Text></View>
            )}
            </Appbar>
        </View>
    )
}

export default DeckInfoScreen


const stl = EStyleSheet.create({
    playButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
        fontFamily: "DMSans",
        fontWeight: 500,
        paddingHorizontal: 50,
    },
    playButton: {
        height: 84,
        minWidth: 151,
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'black',
    },
    playButtonDimmed: {
        height: 84,
        width: 151,
        borderRadius: '25%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'black',
        filter: "brightness(40%)"
    },
    largeButtonImage: {
        height: 84,
        width: 151,
    },
    buttonDimmed: {
        filter: "brightness(10%)",
        blurRadius: 100,
        opacity: 0.9
    },


    deckInfoRules: {
        heading3: {
            fontFamily: 'DMSerifText-Regular',
            fontSize: 24,
            lineHeight: 28,
            letterSpacing: 0.5,
            fontWeight: 400,
            color: "black",
            textAlign: 'center',
            alignSelf: 'center',
        },
        heading5: {
            fontFamily: "DMSans",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 24,
            letterSpacing: 0.5,
            marginTop: 20,
            marginLeft: 40,
            marginBottom: 20,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DMSans",
            fontWeight: 400,
            fontSize: 18,
            letterSpacing: 0.5,
            lineHeight: 26,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 40,
            textAlign: 'center',
            color: 'black',

        },
        blockquote: {
            fontFamily: "DMSans",
            fontSize: 16,
            borderLeftWidth: 0,
            backgroundColor: '$containerColor',
        },
        ordered_list:{
            counterReset: 'item',
            fontFamily: "DMSans",
            fontSize: 18,
            letterSpacing: 0.5,
            lineHeight: 26,
            marginLeft: 20,
            backgroundColor: '$containerColor',
        },
        ordered_list_icon: {
            marginRight: 20,
            marginBottom: 20,
            paddingTop: 10,
            paddingLeft: 10,
            backgroundColor: "#EEEEEE",
            width: 42,
            height: 42,
            borderRadius: 50,
            fontWeight: 400,
            fontFamily: 'DMMono-Regular',
            fontSize: 16,
            lineHeight: 0,
            color: "black",
            textAlign: "center",
            justifyContent: 'center',
            alignItems: 'center',
        },
        bullet_list: {
            lineHeight: 24,
        },
        body: {
            fontFamily: "DMSans",
            marginTop: 20,
            marginRight: 30,
            backgroundColor: 'transparent',
        }
    }
});