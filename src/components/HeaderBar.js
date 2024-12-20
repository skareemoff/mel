import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Appbar } from 'react-native-paper';

export const HeaderBar = ({ isHomeScreen, navigation}) => {
    const clickGoBack = useCallback(() => {
        navigation.goBack(null)
    }, [navigation]);

    return (
        <View style={st.headerContainer} >
        {
            !isHomeScreen &&
            <TouchableOpacity style={st.backButton}onPress={clickGoBack}>
                <Image
                    style={st.backButtonImage}
                    source={require('../assets/images/button-small-back.png')}
                />
            </TouchableOpacity>
        }
            <Image source={require('../assets/images/logo.png')} style={st.logo} />
        </View>
    );
}

const st = EStyleSheet.create({
    headerContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',

        backgroundColor: 'transparent',
    },
    backButton: {
        width: 42,
        height: 42,
        left: 20,
        top: 20,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.7
    },
    backButtonImage: {
        width: 42,
        height: 42,
        backgroundColor: 'transparent',
    },
    logo: {
        top: 60,
        width: '$mainLogoWidth',
        height: '$mainLogoHeight',
        backgroundColor: 'transparent',
    },
});