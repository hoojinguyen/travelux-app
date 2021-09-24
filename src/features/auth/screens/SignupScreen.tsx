import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

export const SignUpScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>SignUpScreen</Text>
        <Button
          title="Go sign In"
          onPress={() => navigation.navigate('SignInScreen')}
          buttonStyle={{ marginBottom: 20 }}
        />

        <Button
          title="Go Forgot"
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
        />
      </View>
    </SafeAreaView>
  );
};
