import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import Button, { BackButton } from '../../components/Button/bundle';
import OTPContainer from '../../components/OTPContainer';

const { width } = Dimensions.get('window');

const OTPScreen = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  return (
    <View style={styles.container}>
      <BackButton screenName='ForgotPassword'/>

      <Text style={styles.title}>Nhập mã xác nhận</Text>
      <Text style={styles.subtitle}>Hãy nhập mã OTP đã được gửi cho ********78</Text>
      <Text style={styles.resend}>Gửi lại OTP (60s)</Text>

      <OTPContainer/>

      <Button text='Xác thực'/>

      <TouchableOpacity onPress={() => alert('Gửi lại mã OTP')}>
        <Text style={styles.resendLink}>Không nhận được mã? Gửi lại</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  resend: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
  },
  verifyButton: {
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
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendLink: {
    color: '#03A63C',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline'
  },
});

export default OTPScreen;