import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { View, Platform, InteractionManager, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GestureDetectorProvider } from "react-native-screens/gesture-handler";
import HomeScreen from "./src/components/HomeScreen";
import PlayScreen from "./src/components/PlayScreen";
import { localStorage } from "./src/components/storage";
import SplashScreen from "./src/components/SplashScreen";
import EStyleSheet from "react-native-extended-stylesheet";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import {MELContextProvider} from './src/components/MELContext'
import Onboarding from "./src/components/onboarding/Onboarding";
import { getFcmToken, requestUserPermission, notificationListener } from './src/components/notifications';
import Purchases from "react-native-purchases";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const showOnboarding = localStorage.getString("SHOW_ONBOARDING");
  const isShowOnboarding = typeof(showOnboarding) == 'undefined' || showOnboarding == null || showOnboarding !== 'NO';

  useEffect(() => {
    // SPLASH SCREEN procedure
    const timer = setTimeout(() => {
      if (Platform.OS === 'ios') {
        InteractionManager.runAfterInteractions(() => {
          setIsShowSplashScreen(false);
        });
      }
      else {
        setIsShowSplashScreen(false);
      }
    }, isShowOnboarding ? 6000 : 5000);

    // IN_APP PURCHASE init procedure
    if (Platform.OS === 'ios') {
    	Purchases.configure({ apiKey: "appl_UGOzzbPVQswvkicPbnNYNqYbyae" });
    }

    // PUSH NOTIFICATIONS procedure
    void getFcmToken(localStorage);
    void requestUserPermission();
    void notificationListener();
    if(isShowOnboarding) {
      localStorage.set("SHOW_ONBOARDING", 'NO');
    }

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
    <GestureHandlerRootView>
      <GestureDetectorProvider>
        <MELContextProvider>
          <View style={stl.container}>
            <StatusBar hidden={true} />
            { isShowSplashScreen
              ?  <SplashScreen />
              :  <NavigationContainer theme={navTheme}>
                  <Stack.Navigator initialRouteName={isShowOnboarding ? 'Onboarding' : 'Home'}>
                    <Stack.Screen name="Onboarding" component={Onboarding}     options={{ headerShown: false }} />
                    <Stack.Screen name="Home"       component={HomeScreen}     options={{ headerShown: false, gestureEnabled: true, goBackGesture: "twoDimensionalSwipe"}} />
                    <Stack.Screen name="Info"       component={DeckInfoScreen} options={{ headerShown: false, gestureEnabled: true, goBackGesture: "twoDimensionalSwipe"}} />
                    <Stack.Screen name="Play"       component={PlayScreen}     options={{ headerShown: false, gestureEnabled: true, goBackGesture: "twoDimensionalSwipe"}} />
                  </Stack.Navigator>
              </NavigationContainer>
          }
          </View>
        </MELContextProvider>
      </GestureDetectorProvider>
    </GestureHandlerRootView>
  );
}

const stl = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$containerColor',
  },
});