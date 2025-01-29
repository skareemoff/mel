import messaging from '@react-native-firebase/messaging';
import notifee from "@notifee/react-native";
import TriggerType from "@notifee/react-native";

const FCM_TOKEN = 'FCM_TOKEN';

const requestUserPermission = async () => {
  return await messaging().requestPermission();
};

const getFcmToken = async ({localStorage}) => {
  const fcmtoken = localStorage.getString('fcmtoken');
  if (!fcmtoken) {
    try {
      const newFcmToken = await messaging().getToken();
      localStorage.set(FCM_TOKEN, newFcmToken);
    } catch (error) {
      console.error(error);
    }
  }
};

const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      if(remoteMessage)
        showNotification(remoteMessage.notification);
    });

    // Quiet and Background State -> Check whether an initial notification is available
    messaging().getInitialNotification().then(remoteMessage => {
      if(remoteMessage)
        showNotification(remoteMessage.notification);
    }).catch(error => console.log(error));

    // Foreground State
    messaging().onMessage(async remoteMessage => {
      if(remoteMessage)
        showNotification(remoteMessage.notification);
    });

    subscribeToTopic('broadcast_to_all_users');
    subscribeToTopic('testing');
};

const showNotification = async ({title, body}) => {
  if(title === 'Question of the day')
    notifee.setBadgeCount(1);

  const curDate = new Date();
  console.log("Notification: "+curDate.getHours());
  if(curDate.getHours() < 9 || curDate.getHours() > 21) {
    scheduleNotification(title, body);
  }
  else {
    console.log("Notification shown");
    await notifee.displayNotification({
      title: title,
      body: body,
    });
  }
};

const scheduleNotification = async ({title, body}) => {
  date = new Date();
  if(date.getHours() < 9 )
    date.setHours(9, 0, 0);
  else if(date.getHours() > 21) {
    date.setHours(9, 0, 0);
    date.setDate(date.getDate() + 1)
  }

  console.log("Notification scheduled for: "+date+" : "+date.getTime());
  // Create a trigger notification
  await notifee.createTriggerNotification({
      title: title,
      body: body
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    }
  );
}

const subscribeToTopic = async (topicName) => {
  try {
    await messaging().subscribeToTopic(topicName);
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