import React, { useRef, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text, Animated, Easing, Dimensions} from 'react-native';
import { HeaderBar } from './HeaderBar';
import { SvgXml } from 'react-native-svg';

export default function SplashScreen({navigation}) {
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;
    const fadeAnim4 = useRef(new Animated.Value(0)).current;
    const fadeAnim5 = useRef(new Animated.Value(1)).current;
    const fadeAnim6 = useRef(new Animated.Value(0)).current;
    const fadeAnim7 = useRef(new Animated.Value(0)).current;
    const slideAnim1 = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnim1, {
                toValue:1,
                duration:750,
                easing: Easing.ease,
                useNativeDriver:true,
            }),
            Animated.timing(fadeAnim2, {
                toValue:1,
                duration:750,
                easing: Easing.ease,
                useNativeDriver:true,
            }),
            Animated.timing(fadeAnim3, {
                toValue:1,
                duration:750,
                easing: Easing.ease,
                useNativeDriver:true,
            }),
            Animated.timing(fadeAnim4, {
                toValue:1,
                duration:1000,
                easing: Easing.ease,
                useNativeDriver:true,
            }),
            Animated.parallel([
                Animated.timing(fadeAnim5, {
                    toValue:0,
                    duration:750,
                    easing: Easing.ease,
                    useNativeDriver:true,
                }),
                Animated.timing(fadeAnim6, {
                    toValue:1,
                    duration:1000,
                    easing: Easing.ease,
                    useNativeDriver:true,
                }),
            ]),
            Animated.timing(slideAnim1, {
                toValue: 0 - ((Dimensions.get('window').height - 50) /2), // 50 is $mainLogoHeight in styles
                duration: 750,
                easing: Easing.ease,
                useNativeDriver: true
            }),
            Animated.timing(fadeAnim7, {
                toValue:1,
                duration: 1000,
                easing: Easing.ease,
                useNativeDriver:true,
            }),
        ]).start();
    });

    const data = require('../data/cards.json');
    const bgXML = data.svgLibrary["SVG_ONB1"];

    return (
        <View style={stl.container}>
            {
                /*
                 *  fade in the background of the first onboarding screen
                 *  to create the illusion of screen transition
                 */
            }
            <Animated.View style={{
                    flex: 1,
                    top: 0,
                    zIndex: 100,
                    height: "100%",
                    width: "100%",
                    position: 'absolute',
                    opacity:fadeAnim7}}>
                <SvgXml
                    xml={bgXML}
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
            </Animated.View>
            <Animated.View style={[stl.container, {opacity:fadeAnim5}]}>
                <Animated.View style={[{opacity:fadeAnim1}]}>
                    <Text style={[stl.text, stl.text1]}>
                        You are
                    </Text>
                </Animated.View>
                <Animated.View style={[{opacity:fadeAnim2}]}>
                    <Text style={[stl.text, stl.text2]}>
                        one question away
                    </Text>
                </Animated.View>
                <Animated.View style={[{opacity:fadeAnim3}]}>
                    <Text style={[stl.text, stl.text3]}>
                        from a
                    </Text>
                </Animated.View>
                <Animated.View style={[{opacity:fadeAnim4}]}>
                    <Text style={[stl.text, stl.text4]}>
                        More Exciting Life
                    </Text>
                </Animated.View>
            </Animated.View>
            <Animated.View style={[stl.container, {opacity:fadeAnim6}, {transform: [{translateY: slideAnim1}]} ]}>
                <HeaderBar showBackButton={false} navigation={navigation} />
            </Animated.View>
        </View>
    );
}

const stl = EStyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: '$containerColor',
        margin: 0,
        padding: 0,
    },
    text: {
        color: "#6F6F6F",
        fontFamily: 'DMMono-Regular',
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        width: "100%",
    },

    text1: {
    },

    text2: {
    },

    text3: {
    },
    text4: {
        color: "black",
    },
    image: {
        justifyContent: "center",
        alignItems: "center",
        width: '$mainLogoWidth',
        height: '$mainLogoHeight',
    }
});
