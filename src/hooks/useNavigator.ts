import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../redux/hook';

// import { pushNotification } from '@lib/push-notification';
// import { authSelectors } from '@store/auth';
// import { generalSelector } from '@store/general';
// import { notificationActions } from '@store/notification';

const useNavigator = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  //   const isAnonymously = useAppSelector(authSelectors.isAnonymously);
  //   const { rehydrated } = useSelector(generalSelector.getPersistState);

  //   const [isRehydrated, setIsRehydrated] = useState(rehydrated);
  //   const [channedCreated, setChannelCreated] = useState(false);
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     pushNotification.createChannel(setChannelCreated);
  //     pushNotification.getAllScheduledLocalNotifications(notifications => {
  //       dispatch(
  //         notificationActions.syncScheduleLocalNotificationAsync(notifications),
  //       );
  //     });
  //   }, []);

  //   useEffect(() => {
  //     if (rehydrated) {
  //       setIsRehydrated(true);
  //     }
  //   }, [isLogged, rehydrated]);

  return {
    isAuthenticated: isLogged,
    // isRehydrated,
    // channedCreated,
    // setChannelCreated,
  };
};

export default useNavigator;
