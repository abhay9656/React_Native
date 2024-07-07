import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import HomeScreeen from '../screens/HomeScreeen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { useNavigation } from '@react-navigation/native';
import Browse from '../screens/Browse';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const navigation=useNavigation(); 
  return (
    <Stack.Navigator initialRouteName='HomeScreeen'>
        <Stack.Screen name="Home" component={HomeScreeen} options={{
          headerRight:()=><View><Icon name='login-variant' size={30} onPress={()=>navigation.navigate('Login')}
          />
            <Icons name="user" size={30} onPress={()=>navigation.navigate('Signup')}></Icons>
          </View>
          
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
