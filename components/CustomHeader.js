import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// For standard React Native

// For Expo
import { LinearGradient } from 'expo-linear-gradient';

const CustomHeader = ({headerName}) => {
  return (
    <View>
        <LinearGradient 
      colors={['#4CAF50', '#2E7D32']} 
      style={styles.headerContainer}
    >
      <Text style={styles.headerTitle}> { headerName } </Text>
      <View style={styles.headerIcons}>
        <Icon name="home-outline" size={30} color="#fff" />
        <Image 
          source={require('../assets/avatar.jpg')} 
          style={styles.avatar} 
        />
      </View>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
    zIndex: 50,
    flexDirection: 'row',
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
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default CustomHeader;