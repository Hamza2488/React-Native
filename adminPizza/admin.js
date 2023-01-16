import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../style'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import database  from '@react-native-firebase/database';


const Admin = () => {

  const [Model,setModel] = useState('')
  const [img,setImg] = useState('')
  const [camera, setCamera] = useState()
  const [gallery, setGalery] = useState()
  const [loading,setLoading] = useState(false)


  let Pizza = ()=>{
    setLoading(true)
    if (Object.values(Model).length >2) {
      Model.id = database().ref('Pizza/').push().key;
        console.log('model id',Model.id)
        database()
        .ref(`Pizza/${Model.id}`).set(Model)
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
    

  
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
    const openCamera = async () => {
      const result  = await launchCamera(options);
      setCamera(result.assets[0].uri)

    };
    const openGallery = async () => {
      const result  = await launchImageLibrary(options);
      setGalery(result.assets[0].uri)

    };

    console.log(Model)

  

  return (
    <ScrollView>
    <>
    <Text style={[styles.fs3,styles.textCenter,styles.textBlack,styles.mt1]}>Pizza Details</Text>
      <TextInput onChangeText={(e)=>setModel({...Model,name:e})} placeholder='Pizza Name' style={[styles.borderBottom1,styles.w75,styles.textCenter,styles.mt1,{marginLeft:50}]}/>
      <TextInput onChangeText={(e)=>setModel({...Model,desc:e})} placeholder='Description' style={[styles.borderBottom1,styles.w75,styles.textCenter,{marginLeft:50}]}/>
      <TextInput onChangeText={(e)=>setModel({...Model,price:e})} placeholder='Price' style={[styles.borderBottom1,styles.w75,styles.textCenter,{marginLeft:50}]}/>
      <Text style={[styles.textCenter,styles.mt1,styles.textBlack]}>Pizza Image</Text>
      <Image source={{uri:camera}} style={{width:150,height:150,marginLeft:100}}/>
      <TouchableOpacity onPress={openCamera} style={[styles.btn,styles.w75,styles.mt1,styles.flexCenter,styles.textBlack,{marginLeft:50,backgroundColor:'lightgray'}]}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <Image source={{uri:gallery}} style={[styles.mt2,{width:150,height:150,marginLeft:100}]}/>
      <TouchableOpacity onPress={openGallery} style={[styles.btn,styles.w75,styles.mt1,styles.flexCenter,styles.textBlack,{marginLeft:50,backgroundColor:'lightgray',marginBottom:30}]}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Pizza} style={[styles.btn,styles.mt1,styles.w50,styles.textWhite,styles.bgSecondary,{marginBottom:30,marginLeft:90}]}>
        <Text style={[styles.textWhite,styles.textCenter]}>{loading?'Loading....':'Submit'}</Text>
      </TouchableOpacity>
    </>
    </ScrollView>
  )
}

export default Admin
