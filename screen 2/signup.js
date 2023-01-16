import   {useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import styles from '../style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

const SignUp = ({navigation}) => {
  const [Model, setModel] = useState('')
  const [loader, setLoader] = useState(false)
  console.log(Model)

  const signUpUser = ()=>{
    setLoader(true)
    auth().createUserWithEmailAndPassword(Model.email, Model.password)
    .then((res) => {
      // Signed in 
      var user = res.user;
      console.log(res.user.uid)
      
      database()
      .ref(`androidUser/${res.user.uid}`)
      .set(Model)
      .then(()=>{
        navigation.navigate('Login', res.user.userName)
        setLoader(false)
      })
      .catch((err)=>console.log(err))
      setLoader(false)
      // ...
    })
    .catch((error) => {
      setLoader(false)
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  }
  return (
    <>
    <View style={[styles.bgDanger,{width:'100%',height:'100%'}]}>
      <View  >
        <Text style={{color:'white',fontSize:30,fontWeight:'bold',alignItems:'center',marginVertical:110,marginHorizontal:40,zIndex:1}}>WELCOME</Text>
      </View>
      <View style={{backgroundColor:'white',width:'100%',height:'100%',borderTopRightRadius:50,borderTopLeftRadius:50,position:'relative',top:-70}}>
        <View style={[styles.mb2,{padding:10, }]}>
        <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginHorizontal:20}}>Sign Up</Text>
        <TextInput onChangeText={(e)=>setModel({...Model, userName:e,category:'user'})} style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}}  placeholder='User Name' />
        <TextInput onChangeText={(e)=>setModel({...Model, email:e})}  style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} keyboardType='email-address' placeholder='Email'/>
        <TextInput keyboardType='password' onChangeText={(e)=>setModel({...Model, password:e})} style={{borderBottomWidth:2,borderBottomColor:'black',fontSize:15,marginVertical:15}} placeholder='Password'/>
        <Button title={loader? 'Loading...': 'Sign Up'} onPress={signUpUser} color='#fc2f00'/>
        <View style={{flexDirection:'row', marginVertical:20,marginHorizontal:90}}>
          <Text style={{fontWeight:'bold',fontSize:13,color:'black'}}>Already a member ?</Text>
          <Text style={[styles.mb3,styles.textPrimary,{fontWeight:'bold',fontSize:15,}]} onPress={()=>navigation.navigate('Signup')}>   Login </Text>
        </View>
        </View>
      </View>
    </View>
    </>
  )
}

export default SignUp