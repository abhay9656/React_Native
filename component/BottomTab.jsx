import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreeen from '../screens/HomeScreeen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Browse from '../screens/Browse';
import { View,Text, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomTab=({route,active,navigation})=>{
    const icons={
        Home: active?'home':'home-outline',
        sign:'account-plus',
        Login:'login',
        Browse:'information-outline'
    }

    const handlePress =()=>{
        const event =navigation.emit({
            type:'tabPress',
            target:route.key,
            canPreventDefault:true
        });
        if(!active && !event.defaultPrevented){
            navigation.navigate(route.name,route.params);
        }
    }

   return <TouchableOpacity  onPress={handlePress}>
    <Icon name={icons[route.name]} size={30} color={ active ? 'blue':'black'}/>
    <Text>{route.name}</Text>
   </TouchableOpacity>
}

const MyCustomTabBar=({ state,description,navigation })=>{
    // console.log(state.routes);
     return  <View style={tabStyles.container}>
        {
            state.routes.map((route,index)=>{
                 return <CustomTab  key={route.key} route={route} index={index} active={index === state.index} navigation={navigation}/>
            })
        }
     </View>
}

const tabStyles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-around',
        padding:15,
    }
})

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBar={MyCustomTabBar}>
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
