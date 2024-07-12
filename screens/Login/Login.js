import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../components/Button/bundle';
import { fonts } from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';




const { width } = Dimensions.get('window');

const App = () => {
    const navigation = useNavigation();

    const handleForgotPass = () => {
        navigation.navigate("ForgotPassword");
    }
    const handleHomeScreen = () => {
        navigation.navigate("HomeScreen");
    }
    const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THIEN PHUC DRIVER</Text>
      <Text style={styles.subtitle}>Giao hàng bằng cả tính mạng</Text>

      <View>
        <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            placeholderTextColor="#aaa"
        />
      <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#aaa"
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

      <Button text='Đăng nhập' screenName='HomeScreen'/>
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
});

export default App;