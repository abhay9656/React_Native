import React from 'react'
import {StyleSheet, View,Text } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
       paddingVertical:50,
       backgroundColor:'green',
       flex:1,
    },
    text:{
      textAlign:"center",
      fontSize:40,
      color:'white',
      fontWeight:'bold',
      marginTop:50
    }
})
export default LoginScreen
