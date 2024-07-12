import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/Button';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');


const OrderCard = ({ order }) => {
  return (
    <View style={styles.orderCard}>
      <Text style={styles.orderId}>{order.id}</Text>
      <Text style={styles.orderInfo}>Người nhận: {order.receiver}</Text>
      <Text style={styles.orderInfo}>Số điện thoại: {order.phone}</Text>
      <Text style={styles.orderInfo}>Địa chỉ: {order.address}</Text>
      <Text style={styles.orderInfo}>Note: {order.note}</Text>
      <View style={styles.orderFooter}>
        <View style={styles.totalContainer}>
          <Text style={styles.orderTotal}>Tổng: </Text>
          <Text style={styles.orderTotalAmount}>{order.total}</Text>
        </View>
        <TouchableOpacity style={styles.acceptButton}>
            <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
              <Text style={styles.acceptButtonText}>Nhận</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [isWorking, setIsWorking] = useState(false);

  const orders = [
    { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
    { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
    { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
    { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },

    // Add more orders here
  ];

  const toggleSwitch = () => setIsWorking(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Trạng thái hoạt động</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isWorking ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isWorking}
        />
        <Text style={[styles.statusIndicator, { color: isWorking ? 'green' : 'red' }]}>
          {isWorking ? 'Đang làm' : 'Đang nghỉ'}
        </Text>
      </View>
      <Text style={styles.orderHeader}>Đơn hàng có thể nhận</Text>
      <ScrollView>
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 20,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  statusText: {
    fontSize: 16,
    marginRight: 10,
  },
  statusIndicator: {
    fontSize: 16,
    marginLeft: 10,
  },
  orderHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  orderInfo: {
    fontSize: 18,
    marginBottom: 5,
  },
  orderFooter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 220
  },
  orderTotal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderTotalAmount: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  acceptButton: {
    width: width * 0.5,
    height: '50px',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  gradient: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  }
});

export default HomeScreen;