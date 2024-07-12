import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.failButton]}>
          <Text style={styles.buttonText}>Thất bại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: 'https://example.com/your-image.png' }} // Replace with your image URL or local path
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    padding: 16,
  },
  button: {
    flex: 1,
    borderRadius: 24,
    paddingVertical: 12,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  failButton: {
    backgroundColor: '#f44336',
  },
  completeButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
    fontSize: 16,
  },
});

export default App;