import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/CustomHeader';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';
import AccountScreen from '../screens/Dashboard/AccountScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const homeName = "Trang chủ";
const orderName = "Đơn hàng";
const profileName = "Cá nhân"

const App = () => {
  return (
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Trang chủ') {
                iconName = focused ? 'checkbox-outline' : 'checkbox-outline';
              } else if (route.name === 'Đơn hàng') {
                iconName = focused ? 'cube-outline' : 'cube-outline';
              } else if (route.name === 'Cá nhân') {
                iconName = focused ? 'person-outline' : 'person-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "black",
            tabBarStyle: [
            {
                paddingHorizontal: 6,
                paddingTop: 16,
                height: "10%",
                paddingBottom: 12,
            },
            null
            ]
          })}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={orderName} component={OrdersScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;