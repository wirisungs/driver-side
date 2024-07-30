import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/Button/BackButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { firebase_auth } from '../../firebase/firebaseConfig';

import { signOut } from 'firebase/auth';
const { width } = Dimensions.get('window');

const AccountScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = firebase_auth.currentUser;
        if (user) {
          const response = await fetch(`http://10.0.2.2:4003/api/driver/email/${user.email}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(firebase_auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.header}>
          <BackButton screenName='HomeScreen' />
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{userInfo?.driverName || 'User Name'}</Text>
        </LinearGradient>
      </View>

      <View style={styles.menu}>
        <Text style={styles.sectionTitle}>Tài khoản</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfileDetailsScreen')}>
          <Icon name="person-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="shield-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Trung tâm bảo mật</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Tiện ích</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="time-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Lịch sử đơn hàng</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Về chúng tôi</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="document-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Điều khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="information-circle-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Giới thiệu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="book-outline" size={24} color="#ff4d4d" />
          <Text style={styles.menuItemText}>Hướng dẫn sử dụng</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
          <Icon name="log-out-outline" size={24} color="#fff" />
          <Text style={styles.logoutButtonText}>Đăng xuất</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    overflow: 'hidden',
    borderRadius: 24,
  },
  header: {
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menu: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#333',
  },
  logoutButton: {
    width: width * 0.9,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    borderRadius: 24,
  },
});

export default AccountScreen;