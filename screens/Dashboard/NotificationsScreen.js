import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import BackButton from '../../components/Button/BackButton'
import { LinearGradient } from 'expo-linear-gradient'


const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
        <LinearGradient 
            colors={['#4CAF50', '#1C9546']} 
            style={styles.headerContainer}
        >
            <BackButton screenName={'HomeScreen'}/>
            <Text style={styles.headerTitle}> Thông báo </Text>
         </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      headerContainer: {
        paddingTop: 64,
        paddingBottom: 24,
        paddingHorizontal: 24,
        zIndex: 50,
        flexDirection: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
      },
})

export default NotificationsScreen