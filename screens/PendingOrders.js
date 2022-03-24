import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import male from '../assets/male.png'
import Pick from '../assets/Pick.png'
import Decline from '../assets/Decline.png'

const PendingOrders = ({navigation}) => {
    const [orders, setOrders] = useState([
        {
            id:1,
            name:'1 Box of Piza',
            price:3500,
            timeOrdered: '15 minutes ago'
        },
        {
            id:2,
            name:'3 Rolls of Shawarma',
            price:5500,
            timeOrdered: '14 minutes ago'
        },
        {
            id:3,
            name:'3 Indomie and chicken',
            price:1500,
            timeOrdered: '13 minutes ago'
        },
        {
            id:4,
            name:'1 Box of Cabin biscuit',
            price:1500,
            timeOrdered: '12 minutes ago'
        }
    ])

    const deleteOrder = (id) =>{
        const newOrders = orders.filter(order => order.id !== id)
        setOrders(newOrders)
    }
  return (
    <ScrollView>
      <View style={styles.textInputContainer}>
          <TextInput placeholder="Search for orders" style={styles.textInput}/>
      </View>

      <View style={styles.header}>
          <Text style={styles.text}>Pending Orders </Text>
          <Text style={styles.badge}>{orders.length}</Text>
      </View>
      <Text style={styles.timeStamp}>Last Request 1 hour ago</Text>

      <View style={styles.cardsContainer}>
          {
              orders.map(order =>(
                <View style={styles.card} key={order.id}>
                <View style={styles.cardHeader}> 
                   <Image source={male} />
                   <View style={styles.details}>
                       <Text style={styles.detailsText}>{order.name}</Text>
                       <Text style={styles.detailsText}>{order.timeOrdered}</Text>
                   </View>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.price}>{`\u20A6 ${order.price}`}</Text>
                    <View style={styles.icons}>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                            <Image source={Pick} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>deleteOrder(order.id)}>
                            <Image source={Decline}/>
                        </TouchableOpacity>

                    </View>
                </View>
              </View>
              ))
          }
          
          {orders.length===0 && (<Text style={styles.status}>No orders yet. Please check later!</Text>)}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    status:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc',
        marginTop:200,
        textAlign: 'center'
    },
    textInput:{
        height:50,
        width:'90%',
        padding:10,
        borderWidth:0,
        borderColor:'transparent',
        fontSize:18,
        
    },
    textInputContainer:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:25,
        margin:10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    },
    badge:{
        padding: 0,
        backgroundColor:'#262FF8',
        height: 15,
        width:15,
        borderRadius:10,
        color:'#fff',
        fontSize: 10,
        textAlign: 'center',
        fontWeight:'bold',
    },
    timeStamp:{
        textAlign: 'center',
        fontSize:14,
        color:'#abc'
    },
    cardsContainer:{
        marginTop:10,
        height:'100%'
    },
    card:{
      height: 200,
      width: 300,
      backgroundColor:'rgba(38, 47, 248, 0.7)',
      padding:25,
      borderRadius:10,
      alignSelf: 'center',
      marginTop:10
    },
    cardHeader:{
        display:'flex',
        flexDirection: 'row',
        
    },
    details:{
        marginLeft:20
    },
    detailsText:{
        fontSize:  16,
        color: '#FFF'
    },
    cardBody:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons:{
        display:'flex',
        flexDirection: 'row'
    },
    price:{
        fontSize:26,
        fontWeight:'bold',
        color:'#fff'
    }
})

export default PendingOrders