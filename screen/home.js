import database from '@react-native-firebase/database'
import {useState} from 'react'
import { Text, TouchableOpacity, View, Button , ScrollView, Image, ActivityIndicator} from 'react-native'
import { useEffect } from 'react'
import styles from '../style'
import pic1 from '../Image/pic1.webp'

const Home = ({navigation}) => {
const [data, setData] = useState({})
const [loader, setLoader] = useState(true)

let getData = ()=>{
 
  database()
  .ref('registerVehical')
  .once('child_added', dt =>{
    console.log(`data======>`,dt.val());
    // data.push(dt.val())
    setData(dt.val())
    setLoader(false)
  })
}

console.log(data)

useEffect(() => {
  getData()
}, [])
// console.log(data)


  const Click = (e)=>{
    navigation.navigate('Booking',e)
  }
  const handleClick = (e)=>{
    navigation.navigate('Your Bookins')
  }
  return (
    <>
    {loader?(
       <View>
       <ActivityIndicator style={{marginVertical:270}}  size='large' color='green'/>
     </View>
    ):(
      <ScrollView>
        <TouchableOpacity style={[styles.btn,styles.mt2,]} onPress={handleClick}>
          <Text style={styles.textWhite}>Your Bookings</Text>
        </TouchableOpacity>
    {/* {
      data.map((e,i)=>{
        return(
            <View key={i} style={[styles.flexRow, styles.bgWhite,styles.mt1,styles.rounded]}>

          <View style={styles.p2}>
            <Image style={{width:150, height:100}} source={pic1}/>
          </View>
          <View style={styles.p2}>
            <Text style={[styles.fs2, styles.textPrimary]}>{e.Vehical}</Text>
            <Text style={[styles.fs6, styles.textPrimary]}>{`Seats: ${e.Seat}`}</Text>
            <Text style={[styles.fs6, styles.textPrimary]}>{`Day: ${e.Day1}`}</Text>
            <View style={styles.flexRow}>

            <TouchableOpacity style={[styles.btn,styles.mt1,{marginHorizontal:-20}]} onPress={()=>Click(e)}>
              <Text style={styles.textWhite}>Book Now</Text>
            </TouchableOpacity>
           
            </View>
          </View>
            </View>
        )
      })
    } */}
    </ScrollView>
    )}
    </>
  )
}

export default Home
