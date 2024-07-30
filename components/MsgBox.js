import { View, Text } from 'react-native'
import React from 'react'

const MsgBox = ({msgText}) => {
  return (
    <View>
        <Text> { msgText } </Text>
    </View>
  )
}

export default MsgBox