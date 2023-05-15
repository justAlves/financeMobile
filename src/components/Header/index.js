import { StyleSheet, Alert, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../../contexts/auth'

import { useNavigation } from '@react-navigation/native'

import Feather from '@expo/vector-icons/Feather'

export default function Header({signout}) {

  const navigation = useNavigation()
  const { signOut, user } = useContext(AuthContext)

  function handleClick(){
    Alert.alert('Confirm', 'Do you wanna leave?', [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => signOut()
      }
    ])
  }

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name='menu' size={25} color='#ffffff'/>
        </TouchableOpacity>
        {signout ?  <TouchableOpacity onPress={handleClick}>
          <Feather name='log-out' size={25} color='#E0533D'/>
        </TouchableOpacity> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

})