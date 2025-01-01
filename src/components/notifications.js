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
      showNotification(remoteMessage);
    });

    // Quiet and Background State -> Check whether an initial notification is available
    messaging().getInitialNotification().then(remoteMessage => {
      showNotification(remoteMessage);
    }).catch(error => console.log('failed', error));

    // Foreground State
    messaging().onMessage(async remoteMessage => {
      showNotification(remoteMessage);
    });
};

const showNotification = async ({remoteMessage}) => {
  if (remoteMessage) {
    const {title, body} = remoteMessage.notification;
    await notifee.displayNotification({
      title: title,
      body: body,
    });
  }
  else
    console.log("NO Message in the notification")
};

export {
    FCM_TOKEN,
    getFcmToken,
    requestUserPermission,
    notificationListener,
    showNotification
};