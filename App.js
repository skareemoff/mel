import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import PlayScreen from "./src/components/PlayScreen";
import styles from './src/assets/style'

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 5000);
  });

  return (
    <View style={styles.container}>
      {
        isShowSplashScreen ?
          <SplashScreen /> :
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
              screenOptions={({ navigation, route }) => ({
                headerShadowVisible: false,
                headerStyle: {backgroundColor: 'yellow'},
                headerLeft: () => (
                  route.name == 'Home' ?
                  null
                  :
                  <TouchableOpacity  onPress={() => navigation.goBack(null)}>
                    <Image
                      style={{width: 32, height: 32}}
                      source={require('./src/assets/images/button-small-back.png')}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Image source={require('./src/assets/images/logo.png')} style={{width:'72', height: 32}}/>
                ),
              })}>
              <Stack.Screen name="Home" component={HomeScreen} options={{  headerShown: true}} />
              <Stack.Screen name="Deck" component={DeckInfoScreen} options={{  headerShown: true}} />
              <Stack.Screen name="Play" component={PlayScreen} options= {{  headerShown: true }} />
            </Stack.Navigator>
          </NavigationContainer>
      }
    </View>
  );
}
