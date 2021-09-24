import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

export const ForgetPasswordScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>ForgotPassword</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
