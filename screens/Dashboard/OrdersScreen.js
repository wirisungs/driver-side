import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from '../../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { firebase_auth } from '../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const OrderCard = ({ orders, onComplete, onFail, onMessage }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      {orders.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.orderId}>{item.Code}</Text>
          <Text style={styles.label}>Người nhận: {item.ReceiverName}</Text>
          <Text style={styles.label}>Số điện thoại: {item.SDT}</Text>
          <Text style={styles.label}>Địa chỉ: {item.Address}</Text>
          <Text style={styles.label}>Note: {item.Note}</Text>
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.total}>Tổng:</Text>
              <Text style={styles.totalNumber}>{item.Price}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={() => onFail(item.Code)}>
                <LinearGradient colors={['#F55C5C', '#8B2222']} style={styles.gradient}>
                  <Text style={styles.buttonText}>Thất bại</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => onComplete(item.Code)}>
                <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
                  <Text style={styles.buttonText}>Hoàn tất</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.messageButton}
              onPress={() => navigation.navigate('Mess')}
            >
              <LinearGradient colors={['#D5EF30', '#84861E']} style={styles.gradient}>
                <Text style={styles.buttonText}>Nhắn tin</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const OrderList = ({ orders, onComplete, onFail, onMessage }) => (
  <View style={styles.container}>
    <OrderCard orders={orders} onComplete={onComplete} onFail={onFail} onMessage={onMessage} />
  </View>
);

const App = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchOrders = async () => {
    try {
      const user = firebase_auth.currentUser;
      if (!user) {
        throw new Error('User not logged in');
      }

      const orderResponse = await fetch(`http://10.0.2.2:4003/api/orderongoing/${user.email}`);
      if (!orderResponse.ok) {
        throw new Error(`HTTP error! status: ${orderResponse.status}`);
      }

      const data = await orderResponse.json();
      setOrders(data); 
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCompletePress = async (code) => {
    try {
      const user = firebase_auth.currentUser;
      const idToken = await user.getIdToken();

      const response = await fetch(`http://10.0.2.2:4003/api/${code}/complete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
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
      setModalVisible(true); 
    } catch (error) {
      console.error('Error updating order:', error);
      setError(error);
    }
  };

  const handleFailurePress = async (code) => {
    try {
      const user = firebase_auth.currentUser;
      const idToken = await user.getIdToken();

      const response = await fetch(`http://10.0.2.2:4003/api/${code}/failed`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
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
    } catch (error) {
      console.error('Error updating order:', error);
      setError(error);
    }
  };

  const handleMessagePress = (order) => {
    // Logic to handle messaging with the customer
    console.log('Message customer:', order);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader headerName="Đơn hàng" />
      <Text style={styles.header}>Đơn hàng đã nhận</Text>
      <ScrollView>
        <OrderList orders={orders} onComplete={handleCompletePress} onFail={handleFailurePress} onMessage={handleMessagePress} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../assets/box.jpg')} // Update path as needed
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>Ảnh xác nhận đơn</Text>
            <View style={styles.imageUploadBox}>
              <Text style={styles.uploadText}>+</Text>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.backButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Trở về</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    padding: 16,
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  orderId: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 150,
  },
  total: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  totalNumber: {
    fontSize: 25,
    fontWeight: '600',
    color: 'red',
  },
  buttons: {
    flexDirection: 'row',
    padding: 16,
  },
  button: {
    borderRadius: 24,
    paddingVertical: 12,
    marginHorizontal: 8,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  gradient: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    width: 150,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageUploadBox: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadText: {
    fontSize: 24,
    color: '#4caf50',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    borderRadius: 24,
    paddingVertical: 12,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;