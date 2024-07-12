import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');


const Button = ({text, alertText,screenName}) => {
  const navigation = useNavigation();
  
  const handleNameScreen = () => {
    navigation.navigate(screenName);
  }

  return (
    <View>
      <TouchableOpacity style={styles.loginButton} onPress={handleNameScreen}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient} onPress={() => navigation.navigate(screenName)}>
          <Text style={styles.loginButtonText}> { text }</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    loginButton: {
        width: width * 0.9,
        borderRadius: 20,
        overflow: 'hidden',
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
})

export default Button