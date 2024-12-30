import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

registerRootComponent(App);

const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
        console.log(fcmToken);
    }
}

checkToken();

const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    console.log('Permission status:', authStatus);
};

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background message handled:', remoteMessage);
});
messaging().onMessage(remoteMessage => {
    // Display the notification to the user
    console.log('Foreground message:', remoteMessage);
});
messaging().onNotificationOpenedApp(remoteMessage => {
    // Handle notification interaction when the app is in the foreground
    console.log('App opened by notification while in foreground:', remoteMessage);
});
messaging().getInitialNotification().then(remoteMessage => {
    // Handle notification interaction when the app is opened from a closed state
    console.log('App opened by notification from closed state:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);