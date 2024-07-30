import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from '../../components/CustomHeader';
import { firebase_auth } from '../../firebase/firebaseConfig';

const { width } = Dimensions.get('window');

const OrderCard = ({ orders, onAcceptOrder }) => (
  <View style={styles.container}>
    {orders.map((item, index) => (
      <View key={index} style={styles.orderCard}>
        <Text style={styles.orderId}>{item.Code}</Text>
        <Text style={styles.orderInfo}>Người nhận: {item.ReceiverName}</Text>
        <Text style={styles.orderInfo}>Số điện thoại: {item.SDT}</Text>
        <Text style={styles.orderInfo}>Địa chỉ: {item.Address}</Text>
        <Text style={styles.orderInfo}>Note: {item.Note}</Text>
        <View style={styles.orderFooter}>
          <View style={styles.totalContainer}>
            <Text style={styles.orderTotal}>Tổng: </Text>
            <Text style={styles.orderTotalAmount}>{item.Price}</Text>
          </View>
          <TouchableOpacity style={styles.acceptButton} onPress={() => onAcceptOrder(item.Code)}>
            <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
              <Text style={styles.acceptButtonText}>Nhận</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    ))}
  </View>
);

const HomeScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [driverEmail, setDriverEmail] = useState(null);
  const [isWorking, setIsWorking] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://10.0.2.2:4003/api/getorder');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const ordersData = await response.json();
      setOrders(Array.isArray(ordersData) ? ordersData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchDriverEmail = async () => {
      try {
        const user = firebase_auth.currentUser;
        if (user && user.email) {
          const response = await fetch(`http://10.0.2.2:4003/api/driver/email/${user.email}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const driverData = await response.json();
          setDriverEmail(driverData.driverEmail);
        }
      } catch (error) {
        console.error('Error fetching driver email:', error);
        setError(error);
      }
    };

    fetchDriverEmail();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAcceptOrder = async (code) => {
    if (!driverEmail) {
      Alert.alert('Error', 'Driver Email is not available');
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:4003/api/order/${code}/accept`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ driverEmail }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedOrder = await response.json();

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.Code === updatedOrder.Code ? updatedOrder : order
        )
      );

      fetchData();

      Alert.alert('Success', 'Đã nhận đơn thành công, vui lòng kiểm tra ở trang đơn hàng');
    } catch (error) {
      console.error('Error updating order:', error);
      Alert.alert('Error', `An error occurred: ${error.message}`);
      setError(error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader headerName="Trang chủ" />
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Trạng thái hoạt động</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isWorking ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsWorking(previousState => !previousState)}
          value={isWorking}
        />
        <Text style={[styles.statusIndicator, { color: isWorking ? 'green' : 'red' }]}>
          {isWorking ? 'Đang làm' : 'Đang nghỉ'}
        </Text>
      </View>
      <Text style={styles.orderHeader}>Đơn hàng có thể nhận</Text>
      <ScrollView>
        {isWorking ? (
          <OrderCard orders={orders} onAcceptOrder={handleAcceptOrder} />
        ) : (
          <Text style={styles.inactiveMessage}>Vui lòng bật trạng thái hoạt động để xem đơn hàng.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    gap: 150,
  },
  orderTotal: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  orderTotalAmount: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  acceptButton: {
    width: width * 0.5,
    height: 50,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradient: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  inactiveMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'grey',
  },
});

export default HomeScreen;