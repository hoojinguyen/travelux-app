import React from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signOut } from '../../../redux/slices/authSlice';
import { AccountStyle as styles } from '../styles';

const AVATAR_PATH = '../../../assets/Images/avatar.jpg';
const BACKGROUND_PATH = '../../../assets/Images/background.jpg';

export function AccountScreen() {
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector(state => state.auth.isLogged);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const currentUser = useAppSelector(state => state.auth.currentUser);

  const features = [
    {
      id: 1,
      title: 'Review Travelux',
      description: '5 stars for us',
      icon: 'star',
      action: 'review',
    },
    {
      id: 2,
      title: 'Support 24/7',
      description: '(+84) 389457027',
      icon: 'call',
      action: 'call-support',
    },
    {
      id: 3,
      title: 'Language',
      description: 'English',
      icon: 'language',
      action: 'change-language',
    },
    {
      id: 4,
      title: 'Currency',
      description: 'Viet Nam Dong',
      icon: 'cash',
      action: 'change-currency',
    },
    {
      id: 5,
      title: 'My Card',
      description: '0 paid',
      icon: 'card',
      action: 'go-card',
    },
    {
      id: 6,
      title: 'Sign out',
      description: '',
      icon: 'log-out',
      action: 'sign-out',
    },
  ];

  const handleClickFeature = (action: string) => {
    switch (action) {
      case 'sign-out':
        dispatch(signOut());
        break;
      default:
        Alert.alert('Action', action);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={require(BACKGROUND_PATH)}
          resizeMode="cover"
          style={styles.coverImage}
        />
        <View style={styles.avatarWrapper}>
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
            <Image
              source={require(AVATAR_PATH)}
              resizeMode="cover"
              style={styles.avatarImg}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? Colors.grey600 : Colors.grey300,
                },
                styles.iconOutside,
              ]}>
              <Ionicons name="camera" style={styles.iconInside} />
            </Pressable>
          </Pressable>
          <Text style={styles.username}>Nguyen Van Hoi</Text>
        </View>
      </View>
      <View style={styles.content}>
        {features.map(item => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? Colors.lightGreen500 : 'transparent',
              },
              styles.buttonWrapper,
            ]}
            onPress={() => handleClickFeature(item.action)}>
            <Ionicons name={item.icon} style={styles.buttonIcon} />
            <Text style={styles.buttonTitle}>{item.title}</Text>
            <Text style={styles.buttonDesc}>{item.description}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
