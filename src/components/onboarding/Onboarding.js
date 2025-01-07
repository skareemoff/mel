import React, { useContext } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {MELContext} from '../MELContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './OnboardingScreen'

const Stack = createNativeStackNavigator();

export default function Onboarding() {
  const {dd} = useContext(MELContext);
  const deckData = dd.data().onboarding;
  const screens = [...deckData.screens];

  const OnboardingScreenWrapper1 = ({ navigation }) => (
    <OnboardingScreen
      navigation={navigation}
      index={1}
      size={4}
      data= {screens[0]}
      showPrevious={false}
      showNext={true}
      nextScreen='Onboarding2'/>
  );
  const OnboardingScreenWrapper2 = ({ navigation }) => (
    <OnboardingScreen
      navigation={navigation}
      index={2}
      size={4}
      data= {screens[1]}
      showPrevious={true}
      showNext={true}
      nextScreen='Onboarding3'/>
  );
  const OnboardingScreenWrapper3 = ({ navigation }) => (
    <OnboardingScreen
      navigation={navigation}
      index={3}
      size={4}
      data= {screens[2]}
      showPrevious={true}
      showNext={true}
      nextScreen='Onboarding4'/>
  );
  const OnboardingScreenWrapper4 = ({ navigation }) => (
    <OnboardingScreen
      navigation={navigation}
      index={4}
      size={4}
      data= {screens[3]}
      showPrevious={true}
      showNext={false}
      nextScreen='Home'
    />
  );

  return (
    <View style={stl.container}>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName='Onboarding1'>
        <Stack.Screen name="Onboarding1" component={OnboardingScreenWrapper1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreenWrapper2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreenWrapper3} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding4" component={OnboardingScreenWrapper4} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
}

const stl = EStyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '$containerColor'
    }
});
