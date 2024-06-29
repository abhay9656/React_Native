import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Image, Pressable } from "react-native";
const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/login.png')} />
            </View>
            <View style={styles.loginCard}>
                <View style={styles.formdField}>
                    <Text style={styles.inputLabel}>Email Address </Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.formdField}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.input} />

                    <Text style={styles.link1}> Forgot Password</Text>
                    <Pressable style={styles.submitBtn} >
                        <Text style={styles.btnText}>Log in</Text>
                    </Pressable>
                    <Text style={{textAlign:'center',marginVertical:10,fontSize:16}}>OR</Text>

                    <Text style={styles.link2}>Don't have an account?sign Up</Text>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 30, backgroundColor: "blue",
        flex: 1
    },
    logoContainer: {
        flex: 2,

        justifyContent: "center",
        alignItems: "center",
    },
    loginCard: {
        flex: 3,
        backgroundColor: "white",
        padding: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    icon: {
        height: 200,
        width: "100%",

    },
    input: {
        backgroundColor: "#eee",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 20,
    },
    formdField: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 4,
        marginLeft: 15
    },
    link1:{
        marginLeft:'auto',
        colo:'#555',
        marginBottom:10,
        marginTop:10
    },
    submitBtn:{
        backgroundColor:'#ffca3c',
        padding:15,
        borderRadius:10,

    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    },
   
});

export default Login
