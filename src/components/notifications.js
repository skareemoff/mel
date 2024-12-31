import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const FCM_TOKEN = 'FCM_TOKEN';

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

const getFcmToken = async ({localStorage}) => {
  // const fcmtoken = localStorage.getString('fcmtoken');
  // if (!fcmtoken) {
    try {
      const newFcmToken = await messaging().getToken();
      console.log("Downloaded FCM token: ", newFcmToken);
      // localStorage.set(FCM_TOKEN, newFcmToken);
    } catch (error) {
      console.error(error);
    }
  // }
};

const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        if (remoteMessage) {
            Alert.alert('A new push message arrived while open: ', JSON.stringify(remoteMessage.notification));
            console.log('A new push message arrived while open: ' + remoteMessage.notification);
        }
    });

    // Quiet and Background State -> Check whether an initial notification is available
    messaging().getInitialNotification().then(remoteMessage => {
        if (remoteMessage) {
            Alert.alert('App opened by notification from closed state:', JSON.stringify(remoteMessage.notification));
            console.log('App opened by notification from closed state: '+ remoteMessage.notification);
        }
    }).catch(error => console.log('failed', error));

    // Foreground State
    messaging().onMessage(async remoteMessage => {
        if (remoteMessage) {
            Alert.alert('A new push message arrived: ', JSON.stringify(remoteMessage.notification));
            console.log('A new push message arrived: ' + remoteMessage.notification);
        }
    });
};

const subscribeToTopic = async (topicName) => {
  try {
    await messaging().subscribeToTopic(topicName);
    console.log('Successfully subscribed to topic:', topicName);
  } catch (error) {
    console.log('Error subscribing to topic:', error);
  }
};


export {
    FCM_TOKEN,
    getFcmToken,
    requestUserPermission,
    notificationListener,
    subscribeToTopic
};

