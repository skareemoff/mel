import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer, createNavigationContainerRef, Header } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/components/SplashScreen";
import HomeScreen from "./src/components/HomeScreen";
import DeckInfoScreen from "./src/components/DeckInfoScreen";
import PlayScreen from "./src/components/PlayScreen";
import CustomNavigationBar from './src/components/CustomNavigationBar';
import styles from './src/assets/style'

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
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
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
              }}>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MEL', headerShown: true}} />
              <Stack.Screen name="Deck" component={DeckInfoScreen} options={{ title: 'MEL', headerShown: true}} />
              <Stack.Screen name="Play" component={PlayScreen} options= {{ title: 'MEL', headerShown: true }} />
            </Stack.Navigator>
          </NavigationContainer>
      }
    </View>
  );
}
