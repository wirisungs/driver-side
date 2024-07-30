import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBlank from '../../components/Header/HeaderBlank';
import { firebase_auth } from '../../firebase/firebaseConfig';

const ProfileDetailsScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <HeaderBlank title="Thông tin cá nhân" screenBack='AccountScreen'/>
      {/* <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: userInfo?.profileImage || 'https://i.pinimg.com/564x/6f/0c/7d/6f0c7dd236a49fef3d2c7ad9def7f87c.jpg' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View> */}
      <Text style={styles.name}>{userInfo?.driverName || 'User Name'}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{userInfo?.driverEmail || 'Not specified'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ngày sinh</Text>
          <TouchableOpacity>
            <Text style={styles.infoValueLink}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Số điện thoại</Text>
          <Text style={styles.infoValue}>{userInfo?.driverPhone || 'Not specified'}</Text>
        </View>
        <TouchableOpacity style={styles.infoRow}>
          <Text style={styles.infoLabel}>Đổi mật khẩu</Text>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 182,
    height: 182,
    borderRadius: 20,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 5,
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    fontSize: 16,
    color: '#000',
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
  },
  infoValueLink: {
    fontSize: 16,
    color: '#4CAF50',
  },
});

export default ProfileDetailsScreen;