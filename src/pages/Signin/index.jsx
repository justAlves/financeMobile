import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Signin() {

  const [newUser, setNewUser] = useState(false)

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/Logo.png')}/>

        {newUser ? <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor='#757575'
        /> : null}

        <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#757575'
        />

        <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#757575'
        />

        {newUser ? <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#757575'
        /> : null}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>
            {newUser ? 'SIGNUP' : 'SIGNIN'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setNewUser(!newUser)}
          style={styles.button2}
        >
          <Text style={styles.btnText2}>{newUser ? 'Alredy have an account?' : 'Or'} </Text>
          <Text style={[styles.btnText2, { textDecorationLine: 'underline' }]}>{newUser ? 'Login' : 'Create a New Account'}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#252525',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
      width: '80%',
      fontSize: 20,
      borderBottomWidth: 1,
      padding: 5,
      marginTop: 29,
    },
    button: {
      marginTop: 54,
      backgroundColor: '#191919',
      paddingVertical: 23,
      paddingHorizontal: 74,
      borderRadius: 35,
    },
    btnText:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    button2:{
      flexDirection: 'row',
      marginTop: 22,
    },
    btnText2:{
      color: '#ffffff',
      fontSize: 16,
      
    }
})