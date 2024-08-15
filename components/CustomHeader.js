import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



const CustomHeader = ({headerName}) => {
  const navigation = useNavigation();
  const handleAccount = () => {
    navigation.navigate("AccountScreen")
  }
  return (
    <View>
        <LinearGradient 
      colors={['#4CAF50', '#1C9546']} 
      style={styles.headerContainer}
    >
      <Text style={styles.headerTitle}> { headerName } </Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationsScreen")}>
          <Icon name="notifications-outline" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
        {/* <Image 
          source={require('../assets/avatar.jpg')} 
          style={styles.avatar}
        /> */}
        <Icon name="person-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
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