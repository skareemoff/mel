import { registerRootComponent } from 'expo';
import messaging from '@react-native-firebase/messaging';
import App from './App';

registerRootComponent(App);

messaging().setBackgroundMessageHandler(async remoteMessage => {
    Alert.alert('Background message handled:', JSON.stringify(remoteMessage.notification));
    console.log('Background message handled: '+ remoteMessage.notification);
});
