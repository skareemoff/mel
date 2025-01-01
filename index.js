import { registerRootComponent } from 'expo';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { showNotification } from './src/components/notifications'
import App from './App';

registerRootComponent(App);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

messaging().setBackgroundMessageHandler(async remoteMessage => {
    showNotification(remoteMessage);
});
