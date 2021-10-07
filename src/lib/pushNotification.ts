import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const pushImmediately = (title: string, message: string) => {
  const request = {
    id: '1',
    title,
    body: message,
  };
  return PushNotificationIOS.addNotificationRequest(request);
};

const pushSchedule = (title: string, message: string, timeDelay: number) => {
  return PushNotificationIOS.addNotificationRequest({
    id: '2',
    title,
    body: message,
    fireDate: new Date(Date.now() + timeDelay * 1000),
    repeats: true,
    repeatsComponent: {
      //   hour: true,
      //   minute: true,
      second: true,
    },
  });
};

const cancelAll = () => {
  return PushNotificationIOS.removeAllPendingNotificationRequests();
};

export default { pushImmediately, pushSchedule, cancelAll };
