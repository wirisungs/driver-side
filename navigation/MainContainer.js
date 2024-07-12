import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../components/CustomHeader';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <CustomHeader headerName='Home'/>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Nhận hàng') {
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
            tabBarShowLabel: false,
            tabBarStyle: [
            {
                paddingHorizontal: 6,
                paddingTop: 16,
                showLabel: false,
                height: "10%",
                paddingBottom: 12,
            },
            null
            ]
          })}
        >
          <Tab.Screen name="Nhận hàng" component={HomeScreen} />
          <Tab.Screen name="Đơn hàng" component={OrdersScreen} />
          <Tab.Screen name="Cá nhân" component={ProfileScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

/*function Dashboard(){
    <NavigationContainer>
      <CustomHeader headerName='Home'/>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Nhận hàng') {
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
            tabBarShowLabel: false,
            tabBarStyle: [
            {
                paddingHorizontal: 6,
                paddingTop: 16,
                showLabel: false,
                height: "10%",
                paddingBottom: 12,
            },
            null
            ]
          })}
        >
          <Tab.Screen name="Nhận hàng" component={HomeScreen} />
          <Tab.Screen name="Đơn hàng" component={OrdersScreen} />
          <Tab.Screen name="Cá nhân" component={ProfileScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
}*/

/*function Auth() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}*/

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