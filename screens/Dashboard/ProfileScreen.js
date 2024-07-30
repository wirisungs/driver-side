import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const reviews = [
  {
    id: '1',
    name: 'Thrisx',
    rating: 5,
    comment: 'Lấy hàng nhanh, nhân viên thân thiện, sẵn sàng chờ mình dậy để lấy hàng',
    date: '26 tháng 6, 2024 lúc 07:09',
    imageUrl: 'https://i.pinimg.com/564x/6f/0c/7d/6f0c7dd236a49fef3d2c7ad9def7f87c.jpg', // replace with actual image URL
  },
  {
    id: '2',
    name: 'Phúc',
    rating: 3,
    comment: 'Book lúc 1 giờ mà tận 1 giờ 15 mới đến.',
    date: '26 tháng 6, 2024 lúc 01:28',
    imageUrl: 'https://i.pinimg.com/564x/78/2a/9b/782a9ba357d834585425bedc618445ce.jpg', // replace with actual image URL
  },
  {
    id: '3',
    name: 'Trâm',
    rating: 4,
    comment: 'Giao hàng nhanh mỗi tội hay bốc đầu',
    date: '26 tháng 6, 2024 lúc 01:28',
    imageUrl: 'https://i.pinimg.com/564x/48/3e/c1/483ec11584b62b07b1899297ae074132.jpg', // replace with actual image URL
  },
];

const ProfileScreen = () => {
  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <View style={styles.reviewContent}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Text key={index} style={index < item.rating ? styles.starFilled : styles.starEmpty}>★</Text>
          ))}
        </View>
        <Text style={styles.comment}>{item.comment}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader headerName="Cá nhân"/>
      <View style={styles.orderStatsContainer}>
        <View style={styles.orderStat}>
          <Text style={styles.orderStatNumber}>20</Text>
          <Text style={styles.orderStatLabel}>Tổng đơn giao</Text>
        </View>
        <View style={styles.orderStat}>
          <Text style={styles.orderStatNumberFailed}>2</Text>
          <Text style={styles.orderStatLabel}>Tổng đơn thất bại</Text>
        </View>
      </View>
      <Text style={styles.title}>Đánh giá của khách hàng</Text>
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    padding: 16
  },
  orderStat: {
    alignItems: 'center',
  },
  orderStatNumber: {
    fontSize: 24,
    color: 'green',
  },
  orderStatNumberFailed: {
    fontSize: 24,
    color: 'red',
  },
  orderStatLabel: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    padding: 16
  },
  reviewContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '400',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  starFilled: {
    color: '#ffcc00',
  },
  starEmpty: {
    color: '#cccccc',
  },
  comment: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default ProfileScreen;