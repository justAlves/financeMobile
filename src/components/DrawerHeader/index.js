import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'

export default function DrawerHeader(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image 
            source={require('../../../assets/Logo.png')}
            style={styles.image}
        />
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
})