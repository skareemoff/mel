import React, { useCallback } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Appbar } from 'react-native-paper';

export const HeaderBar = ({ isHomeScreen, navigation}) => {
    const clickGoBack = useCallback(() => {
        navigation.goBack(null)
    }, [navigation]);

    return (
        <Appbar style={st.appbarTop} >
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
        </Appbar>
    );
}

const st = EStyleSheet.create({
    appbarTop: {
        backgroundColor: '$containerColor',
    },
    backButton: {
        width: 42,
        height: 42,
        top: 32.67,
        left: 31.03,
        border: 1,
        borderColor: 'red',
        position: 'absolute',
    },
    backButtonImage: {
        width: 42,
        height: 42,
    },
    logo: {
        width: '$mainLogoWidth',
        height: '$mainLogoHeight',
        top: 60,
        left: 141,
    },

});