import React, { useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from '../style';

const Driver = ({navigation}) => {
    const [loader, setLoader] = useState(true)

    setTimeout(() => {
        setLoader(false)
    }, 2000);
  return (
    <>
      {loader?(
         <View>
         <ActivityIndicator style={{marginVertical:270}}  size='large' color='green'/>
       </View>
      ):(
        <View style={styles.p1}>
            <TouchableOpacity onPress={()=>navigation.navigate('Registration')}>
                <Text style={[styles.btn, styles.mt3, styles.textCenter]}>Online Registration</Text>
            </TouchableOpacity>
           
        </View>
      )}
    </>
  )
}

export default Driver
