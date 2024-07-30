import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../../firebase/firebaseConfig';

const { width } = Dimensions.get('window');

const App = () => {
  const navigation = useNavigation();

  const [driverEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [driverName, setName] = useState('');
  const [driverPhone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, driverEmail, password);

      const response = await fetch('http://10.0.2.2:4003/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          driverName,
          driverEmail,
          driverPhone,
        }),
      });

      if (response.ok) {
        Alert.alert("Đăng ký thành công");
      } else {
        const errorData = await response.json();
        console.error('Backend error:', errorData.error);
        Alert.alert("Đăng ký thất bại", errorData.error);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Đăng ký thất bại", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THIEN PHUC DRIVER</Text>
      <Text style={styles.subtitle}>Giao hàng bằng cả tính mạng</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={driverEmail}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Họ tên"
          placeholderTextColor="#aaa"
          value={driverName}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          placeholderTextColor="#aaa"
          value={driverPhone}
          onChangeText={setPhone}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgotPassword}>Trở về trang đăng nhập</Text>
        </TouchableOpacity>
      </View>

      {loading ? <ActivityIndicator size="large" color="#0000ff" />
        : <TouchableOpacity style={styles.loginButton} onPress={signUp}>
          <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
            <Text style={styles.loginButtonText}>Đăng kí</Text>
          </LinearGradient>
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
  },
  input: {
    width: width * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#aaa',
    fontSize: 16,
  },
  loginButton: {
    width: width * 0.9,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 15,
  },
  gradient: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;