import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Feather from '@expo/vector-icons/Feather'

export default function Item({data}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Feather 
          name={data.type == 'receita' ? 'arrow-down' : 'arrow-up'}
          size={25}
          color={data.type == 'receita' ? '#469B88' : '#E0533D'}
        />
        <View>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.value}>R${Number(data.value).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Feather name='trash' size={25} color='#E0533D'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#171717',
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  desc:{
    color: '#8c8c8c'
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff' 
  }
})