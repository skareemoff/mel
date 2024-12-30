import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

registerRootComponent(App);

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background message handled:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);