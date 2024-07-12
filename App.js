import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from "../driver-side/screens/Home";
import Login from "../driver-side/screens/Login/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <Login/>
  );
}


