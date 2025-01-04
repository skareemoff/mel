import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles, {width} from './style';

export const HeaderBar = ({ showBackButton, navigation}) => {
    const clickGoBack = useCallback(() => {
        navigation.goBack(null)
    }, [navigation]);

    return (
        <View style={[st.headerContainer, {width: width}]} >
        {
            showBackButton &&
            <TouchableOpacity style={st.backButton} onPress={clickGoBack}>
                <Image
                    style={st.backButtonImage}
                    source={require('../assets/images/button-small-back.png')}
                />
            </TouchableOpacity>
        }
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </View>
    );
}

const st = EStyleSheet.create({
    headerContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        display: 'flex',
        width: '100%',
        top: 0,
        backgroundColor: 'transparent',
    },
    backButton: {
        width: 42,
        height: 42,
        left: 30,
        top: 30,
        position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0.7
    },
    backButtonImage: {
        width: 42,
        height: 42,
        backgroundColor: 'transparent',
    },
});