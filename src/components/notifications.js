import messaging from '@react-native-firebase/messaging';
import notifee from "@notifee/react-native";

const FCM_TOKEN = 'FCM_TOKEN';

const requestUserPermission = async () => {
  return await messaging().requestPermission();
};

const getFcmToken = async ({localStorage}) => {
  // const fcmtoken = localStorage.getString('fcmtoken');
  // if (!fcmtoken) {
    try {
      const newFcmToken = await messaging().getToken();
      // localStorage.set(FCM_TOKEN, newFcmToken);
    } catch (error) {
      console.error(error);
    }
  // }
};

const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      showNotification(remoteMessage.notification);
    });

    // Quiet and Background State -> Check whether an initial notification is available
    messaging().getInitialNotification().then(remoteMessage => {
      showNotification(remoteMessage.notification);
    }).catch(error => console.log('failed', error));

    // Foreground State
    messaging().onMessage(async remoteMessage => {
      showNotification(remoteMessage.notification);
    });

    subscribeToTopic('broadcast_to_all_users');
};

const showNotification = async ({title, body}) => {
  await notifee.displayNotification({
    title: title,
    body: body,
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
    subscribeToTopic,
    showNotification
};