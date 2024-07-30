import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert, ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { fonts } from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../../firebase/firebaseConfig';




const { width } = Dimensions.get('window');

const App = () => {
    const navigation = useNavigation();

    const handleForgotPass = () => {
        navigation.navigate("ForgotPassword");
    }

    const handleRegisterScreen = () => {
      navigation.navigate("RegisterScreen");
    }

    const handleHomeScreen = () => {
        navigation.navigate("HomeScreen");
    }
    //Firebase Authetication
    const [isChecked, setIsChecked] = useState(false);

    const [driverEmail, setDriverEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth;

    const signIn = async () => {
      setLoading(true);
      try {
        const response = await signInWithEmailAndPassword(auth, driverEmail, password);
        console.log(response);
      } catch (error) {
        console.log(error);
        Alert.alert("Error", error.message); // Notify the user of the error
      } finally {
        setLoading(false);
      }
    };


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
            onChangeText={setDriverEmail}
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
        <CheckBox
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          checkedColor="#03A63C"
          uncheckedColor="#03A63C"
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          title="Ghi nhớ mật khẩu"
        />
        <TouchableOpacity onPress={handleForgotPass}>
          <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      {/* <Button text='Đăng nhập' screenName='HomeScreen'/> */}

      {/* Button here */}


      { loading ? <ActivityIndicator size="large" color="#0000ff"/>
      : <>
        <TouchableOpacity style={styles.loginButton} onPress={signIn}>
          <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
            <Text style={styles.loginButtonText}> Đăng nhập </Text>
          </LinearGradient>
        </TouchableOpacity>
      </>
      }
      {/* <TouchableOpacity style={styles.loginButton} onPress={signIn}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
          <Text style={styles.loginButtonText}> Đăng nhập </Text>
        </LinearGradient>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.loginButton} onPress = {handleRegisterScreen}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
          <Text style={styles.loginButtonText}> Đăng ký </Text>
        </LinearGradient>
      </TouchableOpacity>


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
    fontFamily: fonts.Medium
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
    fontFamily: fonts.ThinItalic
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
  checkboxContainer: {
    backgroundColor: 'transparent',
    padding: 0,
    borderWidth: 0,
    flex: 1,
  },
  checkboxText: {
    fontSize: 16,
    color: '#808080',
  },
  forgotPassword: {
    color: '#aaa',
    fontSize: 16,
  },
  loginButton: {
    width: width * 0.9,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 15
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