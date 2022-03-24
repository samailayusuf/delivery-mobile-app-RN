import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import avatar from '../assets/avatar.png'

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Image source={avatar} style={styles.avatar}/>

    <View>
      <Text style={styles.label}> First Name: </Text>
      <Text style={styles.label}> Last Name: </Text>
      <Text style={styles.label}> Email Address: </Text>
    </View>

    <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Place Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('PendingOrders')}>
            <Text style={styles.text}>Take Order</Text>
        </TouchableOpacity>
    </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize:28,
        textAlign: 'center',
        marginTop:10,
        fontWeight: 'bold',
    },
    avatar:{
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop:20   
    },
    label:{
        fontSize:22,
        marginLeft:30,
        marginTop:20,
        fontWeight: 'bold',
    },
    buttons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop:50
    },
    button:{
        backgroundColor: '#262FF8',
        paddingTop: 15,
        paddingRight: 30,
        paddingBottom:15,
        paddingLeft:30,
        borderRadius:5
    },
    text:{
        color: '#FFFFFF',
        fontSize: 16
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
    }
})

export default Dashboard