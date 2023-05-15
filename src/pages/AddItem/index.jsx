import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'

import Feather from '@expo/vector-icons/Feather'

import api from '../../services/api'
import { format } from 'date-fns'

export default function AddItem() {

  const navigation = useNavigation()
  const [type, setType] = useState('receita')
  const [desc, setDesc] = useState('')
  const [value, setValue] = useState('')

  async function handleAdd(){

    if(isNaN(parseFloat(value))){
      alert('Error')
      return;
    }

    const response = await api.post('/receive', {
      description: desc,
      value: Number(value),
      type: type,
      date: format(Date.now(), 'dd/MM/yyyy')
    })

    setDesc('')
    setValue('')
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.form}>
        <Image 
          source={require('../../../assets/image.png')}
          style={styles.image}
        />
        <TextInput
              style={styles.input}
              placeholder='Desc'
              placeholderTextColor='#757575'
              value={desc}
              onChangeText={text => setDesc(text)}
        />
        <TextInput
              style={styles.input}
              placeholder='Value'
              placeholderTextColor='#757575'
              keyboardType='numeric'
              value={value}
              onChangeText={text => setValue(text)}
        />


        <View style={{flexDirection: 'row', marginTop: 39, gap: 10}}>
          <TouchableOpacity style={[styles.choice, type == 'receita' ? 
            {backgroundColor: '#141414', borderWidth: 2, borderColor: '#469B88'} : {backgroundColor:  '#343434'}
          ]}
            onPress={() => setType('receita')}
          >
            <Feather name='arrow-down' size={35} color='#469B88'/>
            <Text style={styles.choiceText}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.choice, type == 'despesa' ?
            {backgroundColor:  '#141414' , borderWidth: 2, borderColor: '#E0533D'} : {backgroundColor:  '#343434'}
          ]}
          onPress={() => setType('despesa')}
          >
            <Feather name='arrow-up' size={35} color='#E0533D'/>
            <Text style={styles.choiceText}>Outcome</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleAdd} style={styles.button}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252525',
    paddingHorizontal: 33
  },
  input:{
    width: '95%',
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 29,
    color: '#FFFFFF'
  },
  button: {
    marginTop: 34,
    backgroundColor: '#191919',
    paddingVertical: 19,
    paddingHorizontal: 82,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginVertical: 50,
    width: 229,
    height: 185,
  },
  choice: {
    flexDirection: 'row',
    paddingVertical: 16,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 2,
    gap: 5
  },
  choiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})