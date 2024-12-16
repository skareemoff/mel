import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Platform, InteractionManager } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import PlayScreen from "./src/components/PlayScreen";
import Onboarding from "./src/components/Onboarding";
import styles from './src/assets/style'
import DeckData from './src/components/DeckData'

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  const isShowOnboarding = true;

  DeckData.inst(); // preload the deck while showing splashscreen

  useEffect(() => {
    const timer = setTimeout(() => {
      // Clean up WebView processes before hiding splash screen
      if (Platform.OS === 'ios') {
        InteractionManager.runAfterInteractions(() => {
          setIsShowSplashScreen(false);
        });
      } else {
        setIsShowSplashScreen(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {
        isShowSplashScreen ?
          <SplashScreen  /> :
          <NavigationContainer>
              <Stack.Navigator initialRouteName={isShowOnboarding ? 'Onboarding' : 'Home'}
                screenOptions={({ navigation, route }) => ({
                  headerShadowVisible: false,
                  headerStyle: styles.headerStyle,
                  headerLeft: () => (
                    route.name == 'Home' || route.name == 'Onboarding' ?
                    null
                    :
                    <TouchableOpacity  onPress={() => navigation.goBack(null)}>
                      <Image
                        style={styles.smallButtonSize}
                        source={require('./src/assets/images/button-small-back.png')}
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: () => (
                    <Image source={require('./src/assets/images/logo.png')} style={styles.logoSize}/>
                  ),
                })}>
                <Stack.Screen name="Home" component={HomeScreen} options={{  headerShown: true}} />
                <Stack.Screen name="Deck" component={DeckInfoScreen} options={{  headerShown: true}} />
                <Stack.Screen name="Play" component={PlayScreen} options= {{  headerShown: true }} />
                <Stack.Screen name="Onboarding" component={Onboarding} options= {{  headerShown: true }} />
              </Stack.Navigator>
          </NavigationContainer>
      }
    </View>
  );
}
