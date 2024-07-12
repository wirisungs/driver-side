import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://example.com/user-avatar.jpg' }} // replace with actual image URL
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Rutricha Phapakithi</Text>
            <Text style={styles.email}>RutrichaPhapakithi@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.sectionTitle}>Tài khoản</Text>
        <TouchableOpacity style={styles.menuItem}>
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

      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.logoutButtonText}>Đăng xuất</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00a676',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#fff',
    fontSize: 14,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a676',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default AccountScreen;