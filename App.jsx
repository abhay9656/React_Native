import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreeen from './screens/HomeScreeen';
import LoginScreen from './screens/LoginScreen';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreeen /> */}
     
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
