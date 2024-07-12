import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

const CustomInput = ({textPlaceholder}) => {
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder={textPlaceholder}
            placeholderTextColor="#aaa" 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: width * 0.9,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 24,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
})

export default CustomInput