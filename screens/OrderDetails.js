import { View, Text, Image, TextInput , TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import avatar from '../assets/avatar1.png'

const OrderDetails = () => {
  return (
    <ScrollView>
      <Text style={styles.header}>KolsKickshaw</Text>
      <Text style={styles.address}>Shop 17, VGC Mall, Lagos State</Text>
      <Image source={avatar} style={styles.image}/>
      
      <Text style={styles.description}>Description</Text>

      <View style={styles.box}>
          <Text style={styles.descriptionText}>
            One box of pepperoni
            cheese pizza with a complementary drink.
          </Text>

          <View style={styles.commission}>
            <Text style={styles.text}>Commission</Text>
            <Text style={styles.text}>{'\u20A6'} 700</Text>
          </View>
      </View>

        <View>
          <Text style={styles.customer}>Customer's Detail</Text>
          <Text style={styles.customerEmail}>
            yusuf7samaila@gmail.com
          </Text>
          <TextInput placeholder="Enter your contact detail" style={styles.input}/>
        </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept Delivery</Text>
      </TouchableOpacity>

      


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F80A0A'
  },
  address:{
    textAlign: 'center',
    fontSize:18,
    color:'#B5B8CC'
  },
  image:{
    alignSelf:'center',
    margin:10,
  },
  description:{
    marginLeft: 30,
    fontSize:28,
    fontWeight: 'bold',
  },
  box:{
    backgroundColor:'#646BF9',
    margin: 20,
    height:150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding:5,
    display:'flex',
    justifyContent: 'center',
    
  },
  descriptionText:{
    color:"#fff",
    fontSize:18,
    padding:5
  },
  commission:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  text:{
    color:'#fff',
    fontSize:18,
    fontWeight: 'bold',
  },
  customer:{
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 20
  },
  customerEmail:{
    color:'#B5B8CC',
    fontSize:18,
    marginLeft:20,
  },
  input:{
    borderWidth:1,
    borderColor: '#B5B8CC',
    height:50,
    margin:20,
    padding:10,
    fontSize:16
  },
  button:{
    backgroundColor:'#646BF9',
    height: 50,
    width:200,
    borderColor: '#B5B8CC',
    borderWidth:1,
    borderRadius:5,
    alignSelf: 'center'
  },
  buttonText:{
    textAlign: 'center',
    alignSelf: 'center',
    marginTop:13,
    fontSize:16,
    color:"white"
  }
})

export default OrderDetails