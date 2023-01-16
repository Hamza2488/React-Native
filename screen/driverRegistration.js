import React, {useState} from 'react'
import {View, Text, ActivityIndicator,TextInput , ScrollView, TouchableOpacity} from 'react-native'
import styles from '../style';
import Picker from 'react-native-picker-select';
import {Checkbox} from 'react-native-paper';
import database from '@react-native-firebase/database';

const DriverRegistration = () => {
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)
    const [register , setRegister] = useState('')

    console.log(register)

    let Registration = ()=>{
        setLoading(true)
        if (Object.values(register).length >6) {
            register.id = database().ref('registerVehical/').push().key;
            console.log(register.id)
            database()
            .ref(`registerVehical/${register.id}`).set(register)
            .then((res)=>{
                setLoading(false)
                console.log('Successfull')
            }).catch((err)=>{
                setLoading(false)
                alert('err')
            })
        }else{
            alert('All Must be Filled')
        }
      
    }

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
        <ScrollView>
        <View style={styles.p1}>
            <Text style={[styles.fs2, styles.textBlack, styles.p1]}>Register Vehical</Text>
            <View style={[styles.p1,styles.bgPrimary,styles.rounded]}>
                <Text style={[styles.fs2,styles.textWhite,styles.textCenter]}>Details</Text>
            <TextInput onChangeText={(e)=>setRegister({...register,Name:e})} placeholder=' Name' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1 ,styles.textWhite]}/>
            <TextInput keyboardType='phone-pad' onChangeText={(e)=>setRegister({...register,Conatct:e})} placeholder='Contact' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput keyboardType='phone-pad' onChangeText={(e)=>setRegister({...register,Cnic:e})} placeholder='Cnic' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput onChangeText={(e)=>setRegister({...register,Vehical:e})} placeholder='Type of Vehicale' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput keyboardType='phone-pad' onChangeText={(e)=>setRegister({...register,Licence:e})} placeholder='Licence Number' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput keyboardType='phone-pad' onChangeText={(e)=>setRegister({...register,Seat:e})} placeholder='No of Seat' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
                
            <View style={styles.flexRow}>
            <TextInput onChangeText={(e)=>setRegister({...register,Day1:e})} placeholder='Day' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite,{width:'100%'}]}/>
            
            </View>

            <TouchableOpacity onPress={Registration} style={[styles.btn,styles.bgWhite,styles.mt1]}>
                <Text style={[styles.textCenter,styles.textPrimary]}>
                    {loading?('Loading...'):('Register')}
                </Text>
            </TouchableOpacity>
   
            </View>
           
        </View>
        </ScrollView>
      )}
    </>
  )
}

export default DriverRegistration
