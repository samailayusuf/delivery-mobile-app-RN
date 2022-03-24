import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import dispatcher from '../assets/dispatch.png'

const Onboarding = ({navigation}) => {
  return (
      
          <View style={styles.OnboardingContainer}>
          <StatusBar
            animated={true}
            backgroundColor="#262FF8"
            hidden={false} />

          <Text style={styles.header}>Deliver Now</Text>
          <Image source={dispatcher}/>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.registerButton}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} style={styles.loginButton}>
                <Text style={styles.loginText}>Dashboard</Text>
            </TouchableOpacity>

          </View>
    </View>
      
  )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 10,
    },
    registerText:{
        color: 'white',
        fontSize:18
    },
    loginText:{
        color: '#262FF8',
        fontSize:18
    },
    registerButton: {
        backgroundColor:'#262FF8',
        paddingTop: 15,
        paddingRight: 35,
        paddingBottom:15,
        paddingLeft: 35,
        borderRadius:10,
    },
    loginButton: {
        backgroundColor:'transparent',
        paddingTop: 15,
        paddingRight: 45,
        paddingBottom:15,
        paddingLeft: 45,
        borderColor:'#262FF8',
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius:10
    },
    OnboardingContainer:{
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop:100
    },
    header:{
        fontSize: 48,
        textAlign: 'center',
        color: '#262FF8'
    }
})

export default Onboarding