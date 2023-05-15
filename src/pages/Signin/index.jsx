import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function Signin() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPasword] = useState('')

  const {newUser, setNewUser, signIn, authLoading, signUp} = useContext(AuthContext)

  function handleLogin(){

    const validations = name == '' || email == '' || password == ''

    if(validations && newUser){
      Alert.alert('Ops! :(', 'Fill in all fields!')
      return
    }

    if(cPassword !== password && newUser)
    {
      Alert.alert('Ops! :(','Passwords do not match.')
      return;
    }
    if(newUser){
      signUp(name, email, password)
    }else{
      signIn(email, password)
    }
    setName('')
    setEmail('')
    setPassword('')
    setCPasword('')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/Logo.png')}/>

        {newUser ? <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor='#757575'
            value={name}
            onChangeText={text => setName(text)}
        /> : null}

        <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#757575'
            value={email}
            onChangeText={text => setEmail(text)}
        />

        <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#757575'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
        />

        {newUser ? <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#757575'
            value={cPassword}
            onChangeText={text => setCPasword(text)}
            secureTextEntry
        /> : null}

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          {authLoading ? (
            <ActivityIndicator size={20} color='#ffffff'/> ): (
              <Text style={styles.btnText}>
            {newUser ? 'SIGNUP' : 'SIGNIN'}
              </Text>
            )
          }
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
      color: '#FFFFFF'
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