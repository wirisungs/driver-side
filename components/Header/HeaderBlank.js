import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../Button/BackButton'


const HeaderBlank = ({title, screenBack}) => {
    return (
      <View style={styles.container}>
          <LinearGradient 
              colors={['#4CAF50', '#1C9546']} 
              style={styles.headerContainer}
          >
              <BackButton screenName={screenBack}/>
              <Text style={styles.headerTitle}> {title} </Text>
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
export default HeaderBlank