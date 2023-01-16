// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen 3/home';
import Singlescreen from '../screen 3/singlescreen';
// import Driver from '../screen/driver';
// import Login from '../screen 2/login';
// import SignUp from '../screen 2/signup';
// import DriverRegistration from '../screen/driverRegistration';
// import UserRegistration from '../screen/userRegistration';
// import Bookings from '../screen/Bookings';
// import Home from '../screen 2/home';
// import Admin from '../adminPizza/admin';
// import SingleScreen from '../screen 2/singleScreen';
// import Map from '../screen 2/map';



const Stack = createNativeStackNavigator();

function AppNavigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* screen 1 */}


      {/* <Stack.Screen name="Home" 
        options={{
          headerRight: () => <Button title="Become a Driver" color='#245501' onPress={()=>navigation.navigate('Driver')} />,
         
        }} component={Home} />
      <Stack.Screen name="Driver"
        options={{
          headerRight: () => <Button title="Become a User" color='#245501' onPress={() => navigation.navigate('Home')} />,
         
        }}
        component={Driver} />
        
          <Stack.Screen name="Login" component={Login} />

        
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Registration" component={DriverRegistration} />
        <Stack.Screen name="Booking" component={UserRegistration} />
        <Stack.Screen name="Your Bookins" component={Bookings} /> */}

        {/* screen 2 */}
        {/* <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Admin' component={Admin}/>
        <Stack.Screen name='Signup' component={SignUp}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Product' component={SingleScreen}/>
      <Stack.Screen name='Select Location' component={Map}/> */}

        {/* screen 3 */}
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Single Product' component={Singlescreen}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;