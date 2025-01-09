import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {CARD_HALF} from "./Utils"
import MELContext from './MELContext'

const CardInfoBar = ({data, height}) => {
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
                    <View style={[stl.pill,height == CARD_HALF ? stl.pillHalf : stl.pillFull ]} key={index}>
                        <Image style={stl.pillImage} source={img} /><Text style={stl.pillText}>{item.info}</Text>
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
        left: 12,
        bottom: 0,
    },
    pill: {
        flexDirection: "row",
        borderRadius: 20,
        borderColor: 'rgba(e, e, e, 0.05)',
        backgroundColor: '#eeeeee',
        opacity: 0.85,
        borderWidth: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15,
        height: 42,
        backdropFilter: 'blur(10px)',
    },
    pillHalf: {
        bottom: 12,
        marginLeft: 4,
    },
    pillFull: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    pillImage: {
        width: 15,
        height: 12,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
    },
    pillText: {
        fontFamily: "DMMono-Regular",
        fontSize: 14,
        lineHeight: 18,
        color: 'black',
        textAlign: 'right',
        verticalAlign: 'middle',
        paddingTop: 12,
        marginBottom: 12,
        marginRight: 5,
        marginLeft: 4,
    }
});