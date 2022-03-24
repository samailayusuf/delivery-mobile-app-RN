import { View, Text, StyleSheet, TextInput, TouchableOpacity, ProgressBarAndroid, Alert,ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = () =>{
    const newUser = {username, firstName, lastName, email}
    const url = "https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/account/signup"
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
        setLoading(false)
        console.log(response.data)
        setMessage(response.data)
        ToastAndroid.showWithGravity(
          response.data,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
    .catch(err => {
      ToastAndroid.showWithGravity(
        err,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <View
        style={styles.line}
    />
<View>
      
      <View style={styles.formElement}>
          <Text style={styles.label}>Userame</Text>
          <TextInput style={styles.input}
            placeholder="Enter Username"
            onChangeText={text => setUsername(text)}
          />
      </View>
      <View style={styles.formElement}>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input}
            placeholder="Enter First Name"
            onChangeText={text => setFirstName(text)}
          />
      </View>
      <View style={styles.formElement}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input}
            placeholder="Enter Last Name"
            onChangeText={text => setLastName(text)}
          />
      </View>
      <View style={styles.formElement}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input}
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
          />
      </View>

      </View>

      <TouchableOpacity
      onPress={ onSubmit }
      style={styles.button} disabled={loading}>
        {!loading && <Text style={styles.buttonText}>Register</Text>}
        {loading && <ProgressBarAndroid/>}
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 45,
        color:'#151324',
        textAlign: 'center',
        lineHeight:64,
        // borderColor:'#262FF8',
        // borderStyle: 'solid',
        // borderWidth:1,

    },
    span: {
        flexDirection: 'row',
        marginRight:12,
        marginLeft:12,
        alignSelf:'center'

    },
    text:{
        fontSize:22,
        textAlign: 'center',
    },
    link:{
        textAlign: 'center',
        fontSize:22,
        fontWeight: 'bold',
        color:'#262FF8',
        textDecorationLine:'underline'
    },
    formElement:{

    },
    label:{
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize:18
    },
    input:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: 10,
    },
   line: {
        borderBottomColor: '#D9DBE9',
        borderBottomWidth: 1,
        margin: 10
      },
      passwordWrapper: {
          borderWidth:1,
          borderColor:'#262FF8',
          marginRight:12,
        marginLeft:12

      },
      passwordInput: {
        height: 30,
        margin: 12,
        padding: 5,
        
      },
      button:{
        width:'95%',
        backgroundColor:'#262FF8',
        margin:10,
        height:50,
        paddingTop:15,
        paddingBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      },
      container:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        height: '100%',
      },
      buttonText:{
        color:'#fff',
        fontSize: 16,
      }
})

export default Register