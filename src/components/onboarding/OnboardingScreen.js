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
import { localStorage } from "../storage";

export default function OnboardingScreen({
    name,
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
       localStorage.set("SHOW_ONBOARDING", 'NO');
    }, [navigation])

    const buildStripes = () => {
        return (
            <>
            </>
        )
    }

    const buildMiniCards = () => {
        return (
            <>
            <MiniCard
                text="Ice Breakers"
                cardTextStyle="deckIce"
                deckBackgroundSvg="SVG_ICE"
                deckBackgroundColor="#00B3E4"
                cardStyle='miniCard1'
                styleCardText='deckName1'
            />
            <MiniCard
                text="Going Deep"
                cardTextStyle="deckDeep"
                deckBackgroundSvg="SVG_DEEP"
                deckBackgroundColor="#5744ff"
                cardStyle='miniCard2'
                styleCardText='deckName1'
            />
            <MiniCard
                text="Connection 101"
                cardTextStyle="deckConnect"
                deckBackgroundSvg="SVG_CONN"
                deckBackgroundColor="#00bc38"
                cardStyle='miniCard3'
                styleCardText='deckName1'
            />
            <MiniCard
                text="Love Life"
                cardTextStyle="deckEOY"
                deckBackgroundSvg="SVG_EOY"
                deckBackgroundColor="#ff4444"
                cardStyle='miniCard4'
                styleCardText='deckName1'
            />
        </>
        );
    };

    const buildMicroCards = () => {
        return (
            <>
            <MiniCard
                text="Emotional Intelligence"
                cardTextStyle="deckIce"
                deckBackgroundSvg="SVG_ICE"
                deckBackgroundColor="white"
                cardStyle='miniCard1'
                styleCardText='deckName1'
                height='micro'
            />
            <MiniCard
                text="Going Deep"
                cardTextStyle="deckDeep"
                deckBackgroundSvg="SVG_DEEP"
                deckBackgroundColor="#5744ff"
                cardStyle='miniCard2'
                styleCardText='deckName1'
                height='micro'
            />
            <MiniCard
                text="Connection 101"
                cardTextStyle="deckConnect"
                deckBackgroundSvg="SVG_CONN"
                deckBackgroundColor="#00bc38"
                cardStyle='miniCard3'
                styleCardText='deckName1'
                height='micro'
            />
            <MiniCard
                text="Love Life"
                cardTextStyle="deckEOY"
                deckBackgroundSvg="SVG_EOY"
                deckBackgroundColor="#ff4444"
                cardStyle='miniCard4'
                styleCardText='deckName1'
                height='micro'
            />
        </>
        );
    };

    const attributes = {
        width: "100%",
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
                                {...attributes}
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
                        { name === 'Community' &&
                            <View style={[stl.onboardingContainer, { top: 100, alignSelf: 'center', backgroundColor:  'transparent' }]}>
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
                        { name === 'Playground' && buildStripes() && buildMicroCards()}
                        { name === 'Friends' && buildMiniCards() }
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
        paddingTop: 5
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
