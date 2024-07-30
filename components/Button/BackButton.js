import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const BackButton = ({screenName}) => {
    const navigation = useNavigation();

    const handleNameScreen = () => {
        navigation.navigate(screenName);
    }
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    header: {
    position: 'absolute',
    top: 40,
    left: 20,
    marginTop: 30
    },
})

export default BackButton