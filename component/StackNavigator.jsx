import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreeen from '../screens/HomeScreeen';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={HomeScreeen} options={{
          headerRight:()=><Icon name='login-variant' size={30}/>
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Sign up',
          header:()=>null
        }} />
      </Stack.Navigator>
  )
}

export default StackNavigator
