import React from 'react'
import { TextInput,View,Text,StyleSheet,Button } from 'react-native'

const Signup = () => {
  return (
    <View>
        <Text style={styles.text}>Signup</Text>
        <TextInput style={styles.input} placeholder="Enter your name"/>
        <TextInput style={styles.input}  placeholder="Enter your email"/>
        <TextInput style={styles.input}  placeholder="Enter your Password"/>
        <TextInput style={styles.input}  placeholder="Enter your Confirm Password"/>
        <View>
            <Button title='Sign Up'/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        marginTop:30
    },
    input:{
        borderWidth:1,
        margin:10,
        padding:10,
        borderRadius:5
    }
})
export default Signup
