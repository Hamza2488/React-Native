import React, {useState} from 'react'
import {View, Text, ActivityIndicator,TextInput , ScrollView, TouchableOpacity} from 'react-native'
import styles from '../style';
import Picker from 'react-native-picker-select';
import {Checkbox} from 'react-native-paper';
import database from '@react-native-firebase/database';

const UserRegistration = ({naviagtion,route}) => {
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)
    const [Booking , setBooking] = useState(route.params,'')

    console.log(Booking)

    let Registration = ({naviagtion})=>{
        setLoading(true)
        if (Object.values(Booking).length >4) {
            Booking.id = database().ref('BookingVehical/').push().key;
            console.log(Booking.id)
            database()
            .ref(`BookingVehical/${Booking.id}`).set(Booking)
            .then((res)=>{
                setLoading(false)
                console.log('Successfull')
                naviagtion.navigate('Bookings')
            }).catch((err)=>{
                setLoading(false)
                alert(err)
            })
        }else{
            setLoading(false)
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
            <Text style={[styles.fs2, styles.textBlack, styles.p1]}>Book Vehical</Text>
            <View style={[styles.p1,styles.bgPrimary,styles.rounded]}>
                <Text style={[styles.fs2,styles.textWhite,styles.textCenter]}>Details</Text>
            <TextInput onChangeText={(e)=>setBooking({...Booking,userName:e})} placeholder=' Name' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1 ,styles.textWhite]}/>
            <TextInput keyboardType='phone-pad' onChangeText={(e)=>setBooking({...Booking,userContact:e})} placeholder='Contact' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput  onChangeText={(e)=>setBooking({...Booking,Pick:e})} placeholder='Pick Up Point' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput onChangeText={(e)=>setBooking({...Booking,Drop:e})} placeholder='Drop Point' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
            <TextInput onChangeText={(e)=>setBooking({...Booking,Time:e})} placeholder='Time' keyboardType='phone-pad' placeholderTextColor='white' style={[styles.borderBottom1,styles.borderWhite,styles.mt1,styles.textWhite]}/>
           
           

            <TouchableOpacity onPress={Registration} style={[styles.btn,styles.bgWhite,styles.mt1]}>
                <Text style={[styles.textCenter,styles.textPrimary]}>
                    {loading?('Loading...'):('Book')}
                </Text>
            </TouchableOpacity>
   
            </View>
           
        </View>
        <View style={styles.p2}>
            <View style={[styles.p2,styles.bgWhite,styles.rounded]}>

            <View style={[styles.flexRow,styles.justifyContentBetween]}>

                <Text style={[styles.textBlack]}>{`Name: ${route.params.Name}`}</Text>
                <Text style={styles.textBlack}>{`Contact: ${route.params.Conatct}`}</Text>
            </View>
            <View style={[styles.flexRow,styles.justifyContentBetween,styles.mt1]}>

                <Text style={[styles.textBlack]}>{`Vehical: ${route.params.Vehical}`}</Text>
                <Text style={styles.textBlack}>{`Seat: ${`No of Seats: ${route.params.Conatct}`}`}</Text>
            </View>
            </View>
            </View>
        </ScrollView>
      )}
    </>
  )
}

export default UserRegistration
