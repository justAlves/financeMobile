import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import Header from '../../components/Header'
import { useEffect, useState, useContext } from 'react'

import { format } from 'date-fns'
import api from '../../services/api'
import { AuthContext } from '../../contexts/auth'

import { useIsFocused } from '@react-navigation/native'

import Feather from '@expo/vector-icons/Feather'
import Item from '../../components/Item'


export default function Home() {

  const isFocus = useIsFocused()
  const [balance, setBalance] = useState([])
  const [receives, setReceives] = useState([])

  const [balanceDate, setBalanceDate] = useState(Date.now())

  const { user } = useContext(AuthContext)

  useEffect(() => {

    let isActive = true

    async function loadBalance(){
      const date = format(balanceDate, 'dd/MM/yyyy')

      const response = await api.get('/balance', {
        params: {
          date: date
        }
      })

      const receives = await api.get('/receives', {
        params: {
          date: date
        }
      })

      if(isActive){
        setBalance(response.data)
        setReceives(receives.data)
      }
    }

    loadBalance()

    return () => isActive = false
  }, [isFocus, balanceDate])




  return (
    <SafeAreaView style={styles.container}>
      <Header signout/>
      <Text style={styles.helloText}>
        Hello, {user.name}
      </Text>

      <View style={styles.balanceContainer}>
        <Text style={styles.text}>Total Balance</Text>
        <Text style={styles.mainBalance}>R${balance[0]?.saldo}</Text>
      </View>

      <View style={{marginTop: 32}}>
        <Text style={{fontWeight: 'bold', color: '#8c8c8c'}}>Today's Transactions</Text>
        <View style={styles.inOutContainer}>
          <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', paddingVertical: 17,}}>
            <Feather name='arrow-down' size={35} color='#469B88'/>
            <View>
              <Text style={styles.text2}>Income</Text>
              <Text style={styles.secondBalance}>R${balance[1]?.saldo}</Text>
            </View>
          </View>
          <View style={{height: '100%', backgroundColor: '#252525', width: 1}}/>
          <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', paddingVertical: 17,}}>
            <Feather name='arrow-up' size={35} color='#E0533D'/>
            <View>
              <Text style={styles.text2}>Outcome</Text>
              <Text style={styles.secondBalance}>R${balance[2]?.saldo}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>

        <TouchableOpacity>
          <View style={styles.icon} >
            <Feather name='calendar' size={25} color='#ffffff'/>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#8c8c8c'}}>Today's Movements</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          keyExtractor={item => item.id}
          data={receives}
          renderItem={({item}) => <Item setBalanceDate={setBalanceDate} data={item}/>}
          showsVerticalScrollIndicator={false}
        />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252525',
    paddingHorizontal: 33
  },
  balanceContainer:{
    backgroundColor: '#141414',
    padding: 20,
    borderRadius: 15,
    elevation: 2
  },
  text:{
    fontSize: 16,
    fontWeight: '600',
    color: '#C7C7C7',
    marginBottom: 22,
  },
  mainBalance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',

  },
  inOutContainer:{
    marginTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#141414',
    
    elevation: 2,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text2:{
    fontSize: 14,
    fontWeight: '600',
    color: '#c7c7c7'
  },
  secondBalance:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  helloText:{
    marginVertical: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  listContainer:{
    flex: 1,
    backgroundColor: '#212121',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
  },
  icon:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  }
})