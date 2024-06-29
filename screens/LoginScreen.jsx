import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Enter your name"
        style={{
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          borderWidth:1
        }}
      />
      <TextInput style={styles.input} placeholder="Enter your password" />
      <View style={styles.button}>
      <View style={styles.buttonContainer}>
        <Button title="login" onPress={() => {}} />
      </View>
    </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    color:"black",
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button:{
    padding:10,
    flex:1,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
  },
});
export default LoginScreen;
