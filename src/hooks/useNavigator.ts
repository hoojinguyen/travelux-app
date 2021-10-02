import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { UserFirebaseAuth as User } from '../models/authType';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setAuthenticated } from '../redux/slices/authSlice';

const useNavigator = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const currentUser = useAppSelector(state => state.auth.currentUser);

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = async (user: User | null) => {
    dispatch(setAuthenticated(!!user));
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

  return {
    isLoading: initializing,
    isAuthenticated: isLogged,
    currentUser,
  };
};

export default useNavigator;
