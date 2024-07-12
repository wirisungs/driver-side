import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OrderCard = ({ order, onComplete }) => (
  <View style={styles.card}>
    <Text style={styles.orderId}>{order.id}</Text>
    <Text style={styles.label}>Người nhận: {order.recipient}</Text>
    <Text style={styles.label}>Số điện thoại: {order.phone}</Text>
    <Text style={styles.label}>Địa chỉ: {order.address}</Text>
    <Text style={styles.label}>Note: {order.note}</Text>
    <View style={styles.footer}>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Tổng:</Text>
        <Text style={styles.totalNumber}> {order.total}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button]}>
          <LinearGradient colors={['#F55C5C', '#8B2222']} style={styles.gradient}>
            <Text style={styles.buttonText}>Thất bại</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={onComplete}
        >
          <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.gradient}>
            <Text style={styles.buttonText}>Hoàn tất</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const OrderList = ({ orders, onComplete }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Đơn hàng đã nhận</Text>
    {orders.map(order => (
      <OrderCard key={order.id} order={order} onComplete={onComplete} />
    ))}
  </View>
);

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const orders = [
    {
      id: 'DBAHX8QJXD',
      recipient: 'Trí',
      phone: '032322xxxxx',
      address: '62/2/4 Phú Xuân, Nhà Bè',
      note: '',
      total: '20.000đ',
    },
    // Add more orders as needed
  ];

  const handleCompletePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <OrderList orders={orders} onComplete={handleCompletePress} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={ require ('/Users/phucnguyen/Documents/Project/TPexpress/driver-side/assets/box.jpg')} 
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
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
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
    gap: 150
  },
  total: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  totalNumber: {
    fontSize: 25,
    fontWeight: '600',
    color: 'red'
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