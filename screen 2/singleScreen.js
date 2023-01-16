import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

const SingleScreen = ({navigation,route}) => {
    const [location,setLocation] = useState(route.params)
    const [quantity,setQuantity] = useState(1)
    console.log(route.params)
    const increament = ()=>{
      quantity < 10? setQuantity(quantity +1): setQuantity(10);
    }
    const decreament = ()=>{
        quantity > 1? setQuantity(quantity -1): setQuantity(1);
      } 
  return (
    <>
    
    <View>
        <View>
        <Image source={{uri:location.image}} style={{width:'100%',height:'78%'}}/>
        </View>
    </View>
    <View style={[styles.bgWhite,{marginTop:-180,padding:30},styles.rounded]}>
            <Text style={[styles.textBlack,styles.textBold,styles.fs2,{marginRight:50}]}>{location.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.textDanger,styles.textBold,styles.fs3,{marginRight:50,marginTop:15}]}>{`Rs:${location.price}`}</Text>
            <View style={[styles.bgThemeLight,styles.p1,{flexDirection:'row',paddingLeft:10,paddingRight:10},styles.mt1]}>
                <TouchableOpacity onPress={increament}>
                <Text style={[styles.fs5,styles.textBlack,styles.textBold]}>+</Text>
                </TouchableOpacity>
                <Text style={[styles.fs5,styles.textBlack,styles.textBold,{marginLeft:20}]}>{quantity}</Text>
                <TouchableOpacity onPress={decreament}>
                <Text style={[styles.fs5,styles.textBlack,styles.textBold,{marginLeft:20}]}>-</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={[styles.mt2]}>
                <Text style={[styles.textBlack]}>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven </Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Select Location')} style={[styles.btn,styles.bgLight,styles.mt1]}>
                    <Text style={[styles.textBlack,styles.textCenter]}>Buy Now</Text>
                </TouchableOpacity>
            </View>
    </View>
      
    </>
  )
}

export default SingleScreen
