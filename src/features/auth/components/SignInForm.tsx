import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Rules from '../../../constants/rules';
import { SignInFormValues } from '../../../models/formType';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signIn } from '../../../redux/slices/authSlice';
import { FormStyle as styles } from '../styles';

export default function SignInForm() {
  const navigation = useNavigation<any>();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: { email: '', password: '' },
  });

  const handleSignIn: SubmitHandler<SignInFormValues> = data => {
    dispatch(signIn(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.formGroup}>
        <View style={styles.formItem}>
          <Text style={styles.labelInput}>Email</Text>
          <View style={styles.formInput}>
            <FontAwesome name="user-o" color={Colors.lightGreen900} size={20} />
            <Controller
              control={control}
              rules={{ ...Rules.SignInForm['email'] }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  placeholder="Your email"
                  placeholderTextColor={Colors.lightGreen500}
                  style={styles.textInput}></TextInput>
              )}
              name="email"
              defaultValue=""
            />
            {!errors.email && (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  color={Colors.green800}
                  size={20}
                />
              </Animatable.View>
            )}
          </View>
          {errors.email && (
            <Text style={styles.errorMsg}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <Text style={styles.labelInput}>Password</Text>
          <View style={styles.formInput}>
            <Feather name="lock" color={Colors.lightGreen900} size={20} />
            <Controller
              control={control}
              rules={{ ...Rules.SignInForm['password'] }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={value => onChange(value)}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  placeholder="Your password"
                  placeholderTextColor={Colors.lightGreen500}
                  secureTextEntry={secureTextEntry}
                  style={styles.textInput}
                />
              )}
              name="password"
              defaultValue=""
            />

            <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color={Colors.lightGreen900}
                  size={20}
                />
              ) : (
                <Feather name="eye" color={Colors.lightGreen900} size={20} />
              )}
            </Pressable>
          </View>
          {errors.password && (
            <Text style={styles.errorMsg}>{errors.password.message}</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <Pressable onPress={handleSubmit(handleSignIn)}>
            <LinearGradient
              colors={[Colors.lightGreen600, Colors.lightGreen900]}
              style={styles.btnSignIn}>
              <Text style={styles.textSign}>Sign In</Text>
              {isLoading && (
                <ActivityIndicator
                  size={60}
                  color={Colors.white}
                  style={styles.loading}
                />
              )}
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[styles.btnSignIn, styles.btnSignUp]}>
            <Text style={[styles.textSign, styles.textSignUp]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
