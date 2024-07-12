import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import BackButton from '../../components/Button/BackButton';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';

const { width } = Dimensions.get('window');


const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleLoginScreen = () => {
    navigation.navigate("Login")
  }

  const handlePasswordChange = () => {
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
        <BackButton screenName='Login'/>

        <Text style={styles.title}>Đổi mật khẩu</Text>
        <Text style={styles.subtitle}>Xác nhận mật khẩu</Text>

        <View>
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu mới"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập lại mật khẩu"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        </View>

        <Button text='Xác nhận'/>
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
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 24,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default ChangePassword;