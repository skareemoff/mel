import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {CARD_HALF} from "./Utils"
import MELContext from './MELContext'
import { BlurView } from "expo-blur";

const CardInfoBar = ({data, height, infoBoxBlur}) => {
    const images = {
        likedCount:      require("../assets/images/icon-heart.png"),
        reflectingCount: require("../assets/images/icon-ppl.png"),
        cardCount:       require("../assets/images/icon-q.png")
    };

    return (
        <View style={stl.pillContainer}>
            { data.map((item, index) => {
                const img = images[item.type];
                return (
                    <View style={[stl.pillOuter, height == CARD_HALF ? stl.pillHalf : stl.pillFull ]} key={index}>
                        { infoBoxBlur &&
                            <BlurView
                                intensity={20}
                                style={stl.blurView}
                            />
                        }
                        <View style={stl.pillContent}>
                            <Image style={stl.pillImage} source={img} />
                            <Text style={stl.pillText}>{item.info}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    );
};

export default CardInfoBar;

const stl = EStyleSheet.create({
    pillContainer: {
        flexDirection: "row",
        justifyContext: 'left',
        alignItems: 'left',
        width: "100%",
        left: 0,
        bottom: 0,
    },
    pillOuter: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        overflow: 'hidden',
        marginLeft: 0,
        position: 'relative',
    },
    pillHalf: {
        bottom: 15,
        left: 12,
        borderRadius: 20,
        backgroundColor: 'rgba(238 238 238 / 0.7)',
    },
    pillFull: {
        borderWidth: 0,
        left: 15,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    pillContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        zIndex: 1,
    },
    pillImage: {
        width: 15,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 12,
        alignSelf: 'center',
        tintColor: 'rgba(0, 0, 0, 0.9)',
    },
    pillText: {
        fontFamily: "DMMono-Regular",
        fontSize: 14,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.9)',
        textAlign: 'right',
        verticalAlign: 'middle',
        paddingTop: 12,
        marginBottom: 12,
        marginRight: 5,
        marginLeft: 4,
    }
});