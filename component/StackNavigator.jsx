import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreeen from '../screens/HomeScreeen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { useNavigation } from '@react-navigation/native';
import Browse from '../screens/Browse';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const navigation=useNavigation(); 
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Home" component={HomeScreeen} options={{
          headerRight:()=><Icon name='login-variant' size={30} onPress={()=>navigation.navigate('Login')}
          />
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          header:()=>null
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          title: 'Sign up',
          header:()=>null
        }} />
        <Stack.Screen name="Browse" component={Browse} options={{
          title: 'Browse',
          header:()=>null
        }} />
      </Stack.Navigator>
  )
}

export default StackNavigator
