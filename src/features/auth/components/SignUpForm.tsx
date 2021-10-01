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
import { SignUpFormValues } from '../../../models/formType';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { signUp } from '../../../redux/slices/authSlice';
import { FormStyle as styles } from '../styles';

export default function SignUpForm({ navigation }: any) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: { email: '', password: '', displayName: '' },
  });

  const handleSignUp: SubmitHandler<SignUpFormValues> = data => {
    dispatch(signUp(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.formGroup}>
        <View style={styles.formItem}>
          <Text style={styles.labelInput}>Email</Text>
          <View style={styles.formInput}>
            <FontAwesome name="user-o" color={Colors.blueGrey600} size={20} />
            <Controller
              control={control}
              rules={{ ...Rules.SignUpForm['email'] }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  placeholder="Your email"
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
            <Feather name="lock" color={Colors.blueGrey600} size={20} />
            <Controller
              control={control}
              rules={{ ...Rules.SignUpForm['password'] }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={value => onChange(value)}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  placeholder="Your password"
                  secureTextEntry={secureTextEntry}
                  style={styles.textInput}
                />
              )}
              name="password"
              defaultValue=""
            />

            <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? (
                <Feather name="eye-off" color={Colors.blueGrey600} size={20} />
              ) : (
                <Feather name="eye" color={Colors.blueGrey600} size={20} />
              )}
            </Pressable>
          </View>
          {errors.password && (
            <Text style={styles.errorMsg}>{errors.password.message}</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <Text style={styles.labelInput}>Display name</Text>
          <View style={styles.formInput}>
            <FontAwesome
              name="address-book"
              color={Colors.blueGrey600}
              size={20}
            />
            <Controller
              control={control}
              rules={{ ...Rules.SignUpForm['displayName'] }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  placeholder="Your name"
                  style={styles.textInput}></TextInput>
              )}
              name="displayName"
              defaultValue=""
            />
          </View>
          {errors.email && (
            <Text style={styles.errorMsg}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.formItem}>
          <Pressable onPress={handleSubmit(handleSignUp)}>
            <LinearGradient
              colors={[Colors.lightBlue600, Colors.lightBlue800]}
              style={styles.btnSignIn}>
              <Text style={styles.textSign}>Sign Up</Text>
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
            onPress={() => navigation.goBack()}
            style={[styles.btnSignIn, styles.btnSignUp]}>
            <Text style={[styles.textSign, styles.textSignUp]}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
