import React, { useEffect, useState } from "react";
import { View, Platform, InteractionManager, StatusBar } from "react-native";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import PlayScreen from "./src/components/PlayScreen";
import Onboarding from "./src/components/Onboarding";
import EStyleSheet from "react-native-extended-stylesheet";
import {MELContextProvider} from './src/components/MELContext'
import { getFcmToken, requestUserPermission, notificationListener } from './src/components/notifications';
import { localStorage } from "./src/components/storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(localStorage.getString("SHOW_ONBOARDING") != 'NO');
  const [isShowOnboarding, setIsShowOnboarding] = useState(localStorage.getString("SHOW_ONBOARDING") != 'NO');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Platform.OS === 'ios') {
        InteractionManager.runAfterInteractions(() => {
          setIsShowSplashScreen(false);
        });
      }
      else {
        setIsShowSplashScreen(false);
      }
    }, 5000);

    void getFcmToken(localStorage);
    void requestUserPermission();
    void notificationListener();

    return () => clearTimeout(timer);
  }, []);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
      <MELContextProvider>
        <View style={stl.container}>
          <StatusBar hidden={true} />
          {
            isShowSplashScreen
            ?  <SplashScreen  />
            :  <NavigationContainer theme={navTheme}>
                <Stack.Navigator initialRouteName={isShowOnboarding ? 'Onboarding' : 'Home'}>
                  <Stack.Screen name="Onboarding" component={Onboarding}     options={{ headerShown: false}} />
                  <Stack.Screen name="Home"       component={HomeScreen}     options={{ headerShown: false}} />
                  <Stack.Screen name="Info"       component={DeckInfoScreen} options={{ headerShown: false}} />
                  <Stack.Screen name="Play"       component={PlayScreen}     options={{ headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        }
        </View>
      </MELContextProvider>
  );
}

const stl = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$containerColor',
  },
});