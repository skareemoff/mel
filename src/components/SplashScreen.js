import React, { useRef, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text, Animated, Easing, Image, Dimensions} from 'react-native';

export default function SplashScreen() {
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;
    const fadeAnim4 = useRef(new Animated.Value(0)).current;
    const fadeAnim5 = useRef(new Animated.Value(1)).current;
    const fadeAnim6 = useRef(new Animated.Value(0)).current;
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
                toValue: 0 - (Dimensions.get('window').height * 0.4),
                duration: 750,
                easing: Easing.ease,
                useNativeDriver: true
            })
          ]).start();
    });

    return (
        <View style={stl.container}>
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
                <Image source={require("../assets/images/logo.png")} style={[stl.image]}/>
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
        backgroundColor: '$containerColor'
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
