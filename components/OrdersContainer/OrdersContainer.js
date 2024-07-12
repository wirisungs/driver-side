import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrdersContainer = ({order}) => {
    const orders = [
        { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
        { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
        { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
        { id: 'DBAHX8QJXD', receiver: 'Trí', phone: '032322xxxxx', address: '62/2/4 Phú Xuân, Nhà Bè', note: '', total: '20.000đ' },
      ];
  return (
    <View style={styles.orderCard}>
      <Text style={styles.orderId}>{order.id}</Text>
      <Text style={styles.orderInfo}>Người nhận: {order.receiver}</Text>
      <Text style={styles.orderInfo}>Số điện thoại: {order.phone}</Text>
      <Text style={styles.orderInfo}>Địa chỉ: {order.address}</Text>
      <Text style={styles.orderInfo}>Note: {order.note}</Text>
      <View style={styles.orderFooter}>
        <Text style={styles.orderTotal}>Tổng: <Text style={styles.orderTotalAmount}>{order.total}</Text></Text>
        <Button text='Nhận'/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    orderHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
      },
      orderCard: {
        backgroundColor: '#fff',
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
        fontSize: 16,
        marginBottom: 10,
      },
      orderInfo: {
        fontSize: 14,
        marginBottom: 5,
      },
      orderFooter: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
      orderTotal: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      orderTotalAmount: {
        color: 'red',
      },
})

export default OrdersContainer