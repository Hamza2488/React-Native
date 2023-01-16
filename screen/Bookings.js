import React,{useState,useEffect} from 'react'
import database from '@react-native-firebase/database'
import {View, Text, ActivityIndicator,TextInput , ScrollView, TouchableOpacity} from 'react-native'
import styles from '../style'

const Bookings = ({navigation}) => {

        const [data, setData] = useState([])
        const [loader, setloader] = useState(true)
        
        let getData = ()=>{
         
          database()
          .ref('BookingVehical')
          .once('child_added', dt =>{
            console.log(dt.val());
            data.push(dt.val())
            setloader(false)
            setData([...data])
          })
        }
        
        console.log(`booking====> ${data}`)
        
        useEffect(() => {
          getData()
        }, [])
  return (
    <>
      {
        loader?
        (<View>
        <ActivityIndicator style={{marginVertical:270}}  size='large' color='green'/>
      </View>):(
        <ScrollView>
            {data.map((x,i)=>{
                return(
                    <View key={i} style={styles.p2}>
            <View style={[styles.p2,styles.bgWhite,styles.rounded]}>

            <View style={[styles.flexRow,styles.justifyContentBetween]}>

                <Text style={[styles.textBlack]}>{`Name: ${x.userName}`}</Text>
                <Text style={styles.textBlack}>{`Contact: ${x.userContact}`}</Text>
            </View>
            <View style={[styles.flexRow,styles.justifyContentBetween,styles.mt1]}>

                <Text style={[styles.textBlack]}>{`Vehical: ${x.Vehical}`}</Text>
                <Text style={styles.textBlack}>{`Seat: ${` ${x.Seat}`}`}</Text>
            </View>
            <View style={[styles.flexRow,styles.justifyContentBetween,styles.mt1]}>

                <Text style={[styles.textBlack]}>{`Driver Name: ${x.Name}`}</Text>
                <Text style={styles.textBlack}>{`Contact: ${` ${x.Conatct}`}`}</Text>
            </View>
            <View style={[styles.flexRow,styles.justifyContentBetween,styles.mt1]}>

                <Text style={[styles.textBlack]}>{`Day: ${x.Day1}`}</Text>
                <Text style={styles.textBlack}>{`Time: ${` ${x.Time}`}`}</Text>
            </View>
            </View>
            </View>
                )
            })}
        </ScrollView>
      )
      }
    </>
  )
}

export default Bookings
