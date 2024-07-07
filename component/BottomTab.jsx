import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreeen from '../screens/HomeScreeen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Browse from '../screens/Browse';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreeen}>
            </Tab.Screen>
            <Tab.Screen name="Login" component={Login}>
            </Tab.Screen>
            <Tab.Screen name="sign" component={Signup}>
            </Tab.Screen>
            <Tab.Screen name="Browse" component={Browse}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default BottomTab
