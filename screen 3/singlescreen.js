import React, { useState } from 'react'
import { Image, Text, View,TouchableOpacity } from 'react-native'
import styles from '../style'

const Singlescreen = ({naviagtion,route}) => {
    const [location,setlocation]=useState(route.params)

  return (
    <>
<View>
    <Image source={{uri:location.image}}  style={{width:'100%',height:'78%'}}/>
    <Text>{location.name}</Text>
    <Text>{location.price}</Text>
    
</View>
      
    </>
  )
}

export default Singlescreen
