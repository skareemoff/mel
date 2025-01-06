import React from 'react'
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Appbar } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import Card from './Card';
import styles from './style'
import {HALF_CARD_HEIGHT} from './style'
import { HeaderBar } from './HeaderBar';
import {MELContext} from './MELContext'

const DeckInfoScreen = ({route, navigation}) => {
    const {dd} = React.useContext(MELContext);
    const { deckID } = route.params;
    const deckData = dd.getDeck(deckID);
    const descrColor = deckData.deckBackgroundColor ? deckData.deckBackgroundColor : 'darkGrey'
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
                fontFamily: "DMSans",
                backgroundColor: 'transparent',
            },
            blockquote: {
                fontFamily: "DMSans",
                fontWeight: 400,
                fontSize: 24,
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
        navigation.navigate('Play', { deckID: deckID });
    };

    const renderCard = ({ item }) => {
        switch(item.id) {
            case 'header':
                return (<HeaderBar showBackButton={true} navigation={navigation} />)
            case 'deck':
                return(
                    <View style={styles.flatListItem}>
                        <Card
                            type='deck'
                            text={deckData.deckName}
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
                            infoLeft='Example'
                            infoTextStyleLeft='exampleInfoLeft'
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
            <Appbar style={[ styles.appbarBottom,
                { backgroundColor: 'transparent'}
            ]} >
            {
                deckData.cards.length > 0
               ?    <TouchableOpacity style={[stl.largeButton, styles.buttonMiddle]} onPressOut={() => clickDeck()}>
                        <Image name="share" style={stl.largeButtonImage} source={require("../assets/images/button-play.png")} />
                    </TouchableOpacity>
                :   <Image name="share" style={[stl.largeButton, styles.buttonMiddle, stl.largeButtonImage, stl.buttonDimmed]} source={require("../assets/images/button-play.png")} />
            }
            </Appbar>
        </View>
    )
}

export default DeckInfoScreen


const stl = EStyleSheet.create({
    largeButton: {
        borderRadius: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 10,
    },
    largeButtonImage: {
        height: 60,
        width: 140,
    },
    buttonDimmed: {
        filter: "brightness(10%)",
        blurRadius: 100,
        opacity: 0.9
    },

    exampleDeckTitle: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 14,
    },
    exampleDeckText: {
        fontFamily: "DMSans-Regular",
        color: '#4B677D',
        fontSize: 24,
        lineHeight: 28,
    },
    exampleInfoLeft: {
        fontFamily: "DMMono-Regular",
        color: '#4B677D',
        fontWeight: '400',
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        left: 0
    },
    deckTextStyle: {
        fontFamily: "DMSans",
        fontWeight: 400,
        fontSize: 24,
    },
    deckInfoRules: {
        heading3: {
            color: "black",
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 24,
            lineHeight: 28,
            fontWeight: 400,
            fontFamily: 'DMSans'
        },
        heading5: {
            fontFamily: "DMSans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black'
        },
        heading6: {
            fontFamily: "DMSans",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            color: 'black',

        },
        blockquote: {
            fontFamily: "DMSans",
            fontSize: 16,
            borderLeftWidth: 0,
            padding: 20,
            backgroundColor: '$containerColor',

        },
        ordered_list:{
            counterReset: 'item',
            listStyleType: 'upper-roman',
            lineHeight: 26,
            backgroundColor: '$containerColor',
        },
        ordered_list_icon: {
            marginRight: 20,
            marginBottom: 20,
            backgroundColor: "#EEEEEE",
            color: "black",
            width: 42,
            height: 42,
            paddingTop: 10,
            paddingLeft: 10,
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 400,
            fontFamily: 'DMMono-Regular',
            fontSize: 16,
            lineHeight: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bullet_list: {
            padding: 10,
            lineHeight: 24,
        },
        body: {
            fontFamily: "DMSans",
            margin: 20,
            paddingLeft: 10,
            backgroundColor: 'transparent',
            marginLeft: 30,
            marginRight: 30,

        }
    }
});