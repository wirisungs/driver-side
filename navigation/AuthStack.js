import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login  from '../screens/Login/Login';
import ForgotPassword  from '../screens/ForgotPassword/ForgotPassword';
import ChangePassword  from '../screens/ChangePassword/ChangePassword';
import Register from '../screens/Register/Register';
import RouteManager from '../navigation/RouteManager';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';
import AccountScreen from '../screens/Dashboard/AccountScreen';
import NotificationsScreen from '../screens/Dashboard/NotificationsScreen';
import ProfileDetailsScreen from '../screens/Dashboard/ProfileDetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


import 'react-native-gesture-handler';
import { onAuthStateChanged } from 'firebase/auth';
import { firebase_auth } from '../firebase/firebaseConfig';
import Mess from '../screens/Dashboard/Mess';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "Trang chủ";
const orderName = "Đơn hàng";
const profileName = "Cá nhân";

const Auth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = onAuthStateChanged(firebase_auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, [initializing]);

  if (initializing) return null;

  const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === orderName) {
            iconName = focused ? 'cube' : 'cube-outline'; 
          } else if (route.name === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          paddingHorizontal: 6,
          paddingTop: 16,
          height: "10%",
          paddingBottom: 12,
        }
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={orderName} component={OrdersScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="RegisterScreen" component={Register} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
          <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
          <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
          <Stack.Screen name="HomeScreen" component={RouteManager}/>
          <Stack.Screen name="Mess" component={Mess}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Auth;
