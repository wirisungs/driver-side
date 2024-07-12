import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button, { BackButton } from '../../components/Button/bundle';
import CustomInput from '../../components/CustomInput/CustomInput';

const { width } = Dimensions.get('window');

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleLoginScreen = () => {
    navigation.navigate("Login");
  }
  const handleOTPScreen = () => {
    navigation.navigate("OTPScreen")
  }

  return (
    <View style={styles.container}>
      <BackButton screenName='Login'/>

      <Text style={styles.title}>Quên mật khẩu</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại đăng ký tài khoản</Text>


      <CustomInput textPlaceholder='Số điện thoại' />

      <Button text='Xác nhận' screenName='OTPScreen'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: width * 0.9,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    width: width * 0.9,
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  gradient: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;