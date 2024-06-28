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
      <Button
        title="Login"
        color=""
        style={{
          width: "100px",
          borderRadius: "5px",
        }}
      />
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
});
export default LoginScreen;
