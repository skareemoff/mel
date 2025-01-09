import { SvgXml } from "react-native-svg";
import React, { useCallback } from "react";
import { Appbar } from 'react-native-paper';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import EStyleSheet from "react-native-extended-stylesheet";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CARD_FULL } from "../Utils";
import { HeaderBar } from "../HeaderBar"
import { MELContext } from "../MELContext";
import styles from '../style'
import cstl from '../cardStyle'
import MiniCard from './MiniCard'
import { runOnJS } from "react-native-reanimated";

export default function OnboardingScreen({
    navigation,
    index,
    size,
    data,
    showPrevious,
    showNext,
    nextScreen }) {

    const { dd } = React.useContext(MELContext);

    const navigateNext = () => {
        navigation.push(nextScreen);
    };

    const navigateBack = () => {
        if(showPrevious)navigation.goBack();
    };

    const swipe = Gesture.Pan()
    .onEnd(e => {
        const isSwipeLeft = e.translationX < 0;

        if (Math.abs(e.translationX) > 20 || Math.abs(e.velocityX) > 500) {
            if(isSwipeLeft)
                runOnJS(navigateNext)();
            else if(showPrevious)
                runOnJS(navigateBack)();
        }
    });

    const clickEnd = useCallback (() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
       });
    }, [navigation])

    const buildMiniCards = () => {
        return (
            <>
            <MiniCard
                text={dd.decks()[0].deckName}
                cardTextStyle={dd.decks()[0].deckTextStyle}
                deckBackgroundSvg={dd.decks()[0].deckBackgroundSvg}
                deckBackgroundColor={dd.decks()[0].deckBackgroundColor}
                cardStyle='miniCard1'
                styleCardText='deckName1'
            />
            <MiniCard
                text={dd.decks()[2].deckName}
                cardTextStyle={dd.decks()[2].deckTextStyle}
                deckBackgroundSvg={dd.decks()[2].deckBackgroundSvg}
                deckBackgroundColor={dd.decks()[2].deckBackgroundColor}
                cardStyle='miniCard2'
                styleCardText='deckName1'
            />
            <MiniCard
                text={dd.decks()[4].deckName}
                cardTextStyle={dd.decks()[4].deckTextStyle}
                deckBackgroundSvg={dd.decks()[4].deckBackgroundSvg}
                deckBackgroundColor={dd.decks()[4].deckBackgroundColor}
                cardStyle='miniCard3'
                styleCardText='deckName1'
            />
            <MiniCard
                text={dd.decks()[6].deckName}
                cardTextStyle={dd.decks()[6].deckTextStyle}
                deckBackgroundSvg={dd.decks()[6].deckBackgroundSvg}
                deckBackgroundColor={dd.decks()[6].deckBackgroundColor}
                cardStyle='miniCard4'
                styleCardText='deckName1'
            />
        </>
        );
    };

    return (
        <GestureDetector gesture={swipe}>
            <View style={styles.container}>
                    <View style={stl.onboardingContainer}>
                        { index == 1 &&
                            <View style={{position: 'absolute', top: 0, backgroundColor: '$containerColor'}}>
                                <HeaderBar showBackButton={false} navigation={navigation} />
                            </View>
                        }
                        { data.screenBackgroundSvg &&
                            <SvgXml
                                xml={dd.getDeckImageSvg(data.screenBackgroundSvg, CARD_FULL)}
                                style={{
                                    position: 'absolute',
                                    zIndex: 0,
                                    alignSelf: 'center',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '$containerColor'
                                }}
                            />
                        }
                        { index === 4 &&
                            <View style={[stl.onboardingContainer, { justifyContent: 'center', alignSelf: 'center', backgroundColor:  'transparent' }]}>
                            <MiniCard
                                height='half'
                                deckName='Question of the day'
                                text="What's the highlight from your childhood you hold dear?"
                                infoRight='11 H'
                                styleDeckName='deckName'
                                styleCardText='cardText'
                                styleFooterText='footerText'
                            />
                            </View>
                        }
                        { index === 3 && buildMiniCards() }
                    </View>
                    <Text style={stl.title}>{data.title}</Text>
                    <View style={[
                        styles.shadow,
                        cstl.card,
                        cstl.cardHalf,
                        {
                            justifyContent: 'center',
                            alignSelf: 'center',
                            top: -50,
                        }
                    ]}>
                        <Text style={[stl.cardText]}>{data.text}</Text>
                        <Appbar style={[stl.appbar]}>
                            { showPrevious &&
                                <TouchableOpacity style={[stl.navButton, stl.buttonLeft]} onPress={navigateBack}>
                                    <Image name="restart" style={[stl.navButtonImage]} source={require("../../assets/images/button-small-back.png")} />
                                </TouchableOpacity>
                            }
                            <Text style={stl.footerText}>{index} of {size}</Text>
                            { showNext
                                ?   <TouchableOpacity style={[stl.navButton, stl.buttonRight]} onPress={navigateNext}>
                                        <Image name="share" style={[stl.navButtonImage]} source={require("../../assets/images/button-small-next.png")} />
                                    </TouchableOpacity>
                                :   <TouchableOpacity style={[stl.navButton, stl.buttonRight]} onPress={clickEnd}>
                                        <Image name="share" style={[stl.navButtonImage]} source={require("../../assets/images/button-small-done.png")} />
                                    </TouchableOpacity>
                    }
                        </Appbar>
                    </View>
            </View>
        </GestureDetector>
    );
};

const stl = EStyleSheet.create({
    onboardingContainer: {
        flex: 1,
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: '$containerColor'
    },
    title: {
        top: -64,
        padding: 0,
        fontFamily: 'DMSans-Regular',
        fontSize: 32,
        fontWeight: 900,
        lineHeight: 32,
        marginLeft: 20,
        backgroundColor: 'transparent'
    },

    cardText: {
        flex: 1,
        fontFamily: "DMSans-Regular",
        color: 'black',
        fontSize: 18,
        lineHeight: 24,
        marginLeft: 30,
        marginRight: 38,
        marginTop: 40,
        textAlign: 'top'
    },
    footerText: {
        fontFamily: "DMMono-Regular",
        color: 'black',
        fontSize: 14,
    },

    appbar: {
        backgroundColor: '$containerColor',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
        height: 32,
        width: '100%',
    },

    navButton: {
        width: 42,
        height: 42,
    },
    buttonLeft: {
        position: 'absolute',
        left: 15,
    },
    buttonRight: {
        position: 'absolute',
        right: 15,
    },
    navButtonImage: {
        width: 42,
        height: 42,
    }
});
