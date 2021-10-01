import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
