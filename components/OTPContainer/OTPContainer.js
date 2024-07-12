import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'

const { width } = Dimensions.get('window');

const OTPContainer = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
      
    const handleChange = (value, index) => {
        const otpArray = [...otp];
        otpArray[index] = value;
        setOtp(otpArray);
    };
    return (
        <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={value}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
        </View>
    )
}




const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: width * 0.8,
        marginBottom: 30,
      },
      otpInput: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
      },
});

export default OTPContainer