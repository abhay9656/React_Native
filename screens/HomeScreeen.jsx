import React from 'react'
import { View ,Text, Button} from 'react-native'
const HomeScreeen = () => {
  return (
    <View style={{padding:50}}>
      <Text style={{textAlign:"center",fontSize:40,color:'blue',fontWeight:'bold'}}>Home Screen</Text>
      <View style={{marginTop:50}}>
        <Button title="Go to page"/>
      </View>
    </View>
    
  )
}

export default HomeScreeen
