import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import database from '@react-native-firebase/database'
import List from './pizzaList'

const Home = ({navigation}) => {

  const [data,setData] = useState([])

  let getData = ()=>{
 
    setData(List)
    
  //   database()
  //   .ref('Pizza')
  //   .once('child_added', dt =>{
  //     console.log(`data======>`,dt.val());
  //     // data.push(dt.val())
  //     setData(dt.val())
  //     setLoader(false)
  //   })
  }
  
  // console.log(data)
  
  useEffect(() => {
    getData()
  }, [])
  return (
    <ScrollView>
    <>
      <View>
        <Text style={[styles.textCenter,styles.fs3,styles.textDanger,styles.textBold,styles.mt1]}>Pizza App</Text>
      </View>
      <View style={[styles.m3]}>

        {data.map((e,i)=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('Single Product',e)}>
            <View key={i} style={[styles.bgLight,styles.p2,styles.rounded,styles.mt2]}> 
              <Image source={{uri:e.image}} style={{width:'100%',height:200}}/> 
              <View>
            <Text style={[styles.fs4,styles.textBold,styles.textBlack,styles.textCenter]}>{e.name}</Text>
            <Text style={[styles.fs5,styles.textBold,styles.textDanger,styles.textCenter]}>{`Rs: ${e.price}`}</Text>
        </View>
      </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </>
        </ScrollView>
  )
}

export default Home;
