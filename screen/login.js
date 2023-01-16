import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import styles from '../style'

const Login = ({navigation}) => {
  const [Login, setLogin] = useState('')
  const [loading, setLoading] = useState(false)

  const loginUser = ()=>{
    setLoading(true)
    auth().signInWithEmailAndPassword(Login.email, Login.password)
    .then((res) => {
      // Signed in
      var user = res.user;
      navigation.navigate('Home',user.uid )
      setLoading(false)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      setLoading(false)
  });
  }
  return (
    <>
    <View style={[styles.bgPrimary,{width:'100%',height:'100%'}]}>
      <View  >
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',alignItems:'center',marginVertical:110,marginHorizontal:40,zIndex:1}}>WELCOME BACK</Text>
      </View>
      <View style={{backgroundColor:'white',width:'100%',height:'70%',borderTopRightRadius:50,borderTopLeftRadius:50}}>
        <View style={{padding:30}}>
        <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginHorizontal:20}}>Login</Text>
        <TextInput onChangeText={(e)=>setLogin({...Login, email:e})}style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} keyboardType='email-address' placeholder='Email'/>
        <TextInput onChangeText={(e)=>setLogin({...Login, password:e})} style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} placeholder='Password'/>
        <Button title={loading?'Loading...':'Login'} onPress={loginUser} color='#245501'/>
        <View style={{flexDirection:'row', marginVertical:20,marginHorizontal:40}}>
          <Text style={{fontWeight:'bold',fontSize:13,color:'black'}}>Create an account?</Text>
          <Text style={{fontWeight:'bold',fontSize:15,color:'#245501',}}>   SignUp</Text>
        </View>
        </View>
      </View>
    </View>
    </>
  )
}

export default Login