import { useEffect, useState } from "react";
import { View, Platform, InteractionManager, StatusBar, Alert } from "react-native";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import PlayScreen from "./src/components/PlayScreen";
import Onboarding from "./src/components/Onboarding";
import EStyleSheet from "react-native-extended-stylesheet";
import {MELContextProvider} from './src/components/MELContext'
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const isShowOnboarding = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Platform.OS === 'ios') {
        InteractionManager.runAfterInteractions(() => {
          setIsShowSplashScreen(false);
        });
      } else {
        setIsShowSplashScreen(false);
      }
    }, 5000);

    const checkToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
          console.log("Token: "+fcmToken);
      }
    }

    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }

    checkToken();
    requestUserPermission();

    messaging().onMessage(remoteMessage => {
      Alert.alert('A new push message arrived: ', JSON.stringify(remoteMessage));
      console.log('A new push message arrived: ' + remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      Alert.alert('A new push message arrived while open: ', JSON.stringify(remoteMessage));
      console.log('A new push message arrived while open: ' + remoteMessage);
    });

    messaging().getInitialNotification().then(remoteMessage => {
      Alert.alert('App opened by notification from closed state:', JSON.stringify(remoteMessage));
      console.log('App opened by notification from closed state: '+ remoteMessage);
    });

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
                  <Stack.Screen name="Onboarding" component={Onboarding} options= {{  headerShown: false }} />
                  <Stack.Screen name="Home" component={HomeScreen} options={{  headerShown: false}} />
                  <Stack.Screen name="Info" component={DeckInfoScreen} options={{  headerShown: false}} />
                  <Stack.Screen name="Play" component={PlayScreen} options= {{  headerShown: false }} />
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