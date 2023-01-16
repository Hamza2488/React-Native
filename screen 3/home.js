import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import database from '@react-native-firebase/database'
import List from './list'

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
    <ScrollView style={styles.bgBlack}>
    <>
      <View>
        <Text style={[styles.textCenter,styles.fs3,styles.textInfo,styles.textBold,styles.mt1]}>Mere Babo  Ne Thana Thaya </Text>
      </View>
      <View style={[styles.m3]}>

        {data.map((e,i)=>{
          return(
            <View key={i} style={[styles.bgSecondary,styles.p,styles.rounded,styles.mt2]}>

              <Image source={{uri:e.image}} style={{width:'100%',height:200}}/> 
              <View>
            <Text style={[styles.fs4,styles.textBold,styles.textWhite,styles.textCenter]}>{e.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text style={[styles.fs5,styles.textBold,styles.textDanger]}>{`Rs: ${e.price}`}</Text>
            <View style={[styles.bgDanger,{borderRadius:50,width:30,height:30}]}>
                <TouchableOpacity onPress={()=>navigation.navigate('Single Product',e)}>

            <Text style={[styles.textWhite,styles.fs2,styles.textCenter]}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
      </View>
          )
        })}
      </View>
    </>
        </ScrollView>
  )
}

export default Home;
