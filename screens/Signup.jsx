import React from 'react'
import { TextInput,View,Text,StyleSheet,Button } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation=useNavigation();
  return (
    <View>
         <Icon name='home' size={30} color={'#fff'} style={{margin:10,top:30,left:20,}}
            onPress={()=>navigation.navigate('Home')}
            />
        <Text style={styles.text}>Signup</Text>
        <TextInput style={styles.input} placeholder="Enter your name"/>
        <TextInput style={styles.input}  placeholder="Enter your email"/>
        <TextInput style={styles.input}  placeholder="Enter your Password"/>
        <TextInput style={styles.input}  placeholder="Enter your Confirm Password"/>
        <View style={styles.btn}>
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
    },
    btn:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:5,
        margin:10
    }
})
export default Signup
