import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View>
        <View style={{alignItems: 'center'}}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Số điện thoại' style={styles.inputField} keyboardType='number-pad' placeholderTextColor="#808080" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Mật khẩu' style={styles.inputField} secureTextEntry={true} placeholderTextColor="#808080"/>
            </View>
        </View>
        
        
        <View>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: '20px',
        borderColor: '#E2E2E2',
        height: 50,
        width: 345,
        marginVertical: 10
    },
    inputField: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '19px',
        flex: 1,
        paddingHorizontal: 20,
    },
    forgotPasswordText: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '19px',
        textAlign: 'right',
        color: '#808080'
    }
})

export default CustomInput