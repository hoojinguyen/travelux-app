import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Notification from '../../../lib/pushNotification';
import { MessageStyle as styles } from '../styles';

export function MessageScreen() {
  const handlePushNotificationImmediately = () => {
    const title = 'Travelux is immediately notification';
    const message =
      'We are happy and announce to you some update for new features';
    return Notification.pushImmediately(title, message);
  };

  const handlePushNotificationSchedule = () => {
    const title = 'Travelux is notification after 10s';
    const message =
      'We are happy and announce to you some update for new features';
    const timeDelay = 10;
    return Notification.pushSchedule(title, message, timeDelay);
  };

  const handleCancelAllNotification = () => {
    return Notification.cancelAll();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Message Screen</Text>
      <Pressable
        onPress={handlePushNotificationImmediately}
        style={styles.button}>
        <Text>Push Notification Immediately</Text>
      </Pressable>
      <Pressable onPress={handlePushNotificationSchedule} style={styles.button}>
        <Text>Push Notification after 10s</Text>
      </Pressable>
      <Pressable onPress={handleCancelAllNotification} style={styles.button}>
        <Text>Cancel All Notification</Text>
      </Pressable>
    </SafeAreaView>
  );
}
