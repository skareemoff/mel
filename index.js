import { registerRootComponent } from 'expo';
// import { AppRegistry } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import { name as appName } from './app.json';
import App from './App';

registerRootComponent(App);

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Background message handled:', remoteMessage);
// });
// AppRegistry.registerComponent(appName, () => App);