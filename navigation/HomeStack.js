import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login  from '../screens/Login/Login';
import ForgotPassword  from '../screens/ForgotPassword/ForgotPassword';
import OTPScreen  from '../screens/OTP/OTPScreen';
import ChangePassword  from '../screens/ChangePassword/ChangePassword';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import RouteManager from '../navigation/RouteManager'
import AccountScreen from '../screens/Dashboard/AccountScreen';
import NotificationsScreen from '../screens/Dashboard/NotificationsScreen';
import ProfileDetailsScreen from '../screens/Dashboard/ProfileDetailsScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* Auth Stack*/}
            <Stack.Screen name="Login" component={Login} screenOptions={{headerShown: false}} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} screenOptions={{headerShown: false}}/>

            <Stack.Screen name="ChangePassword" component={ChangePassword} screenOptions={{headerShown: false}}/>

            <Stack.Screen name="OTPScreen" component={OTPScreen} screenOptions={{headerShown: false}}/>

            <Stack.Screen name="HomeScreen" component={RouteManager} screenOptions={{headerShown: false}}/>

            <Stack.Screen name="AccountScreen" component={AccountScreen}/>

            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}/>

            <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default HomeStack