import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import { Calendar } from 'react-native-calendars'

export default function CalendarModal({filterDate, setModal}) {

  const [dateNow, setDateNow] = useState(new Date())
  const [markedDate, setMarkedDate] = useState({})

  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString))

    let markedDay = {}

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#7D7D7D',
      textColor: '#fff'
    }

    setMarkedDate(markedDay)
  }

  function handleFilter(){
    filterDate(dateNow)
    setModal(false)
  }

  return (
    <View style={styles.modal}>
      <View style={styles.container}>

      <Calendar
        
        onDayPress={handleOnDayPress}
        markedDates={markedDate}
        style={styles.calendar}
        theme={{
          calendarBackground: '#252525',
          arrowColor: '#ffffff',
          monthTextColor: '#ffffff',
          todayTextColor: '#FF4800',
          dayTextColor: '#B3B3B3',
          textDisabledColor: '#737373'
        }}
        enableSwipeMonths
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleFilter}
        >
          <Text style={styles.btnText}>Filter</Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'flex-end'
  },
  container:{
    height: '55%',
    backgroundColor: '#252525',
  },
  buttonContainer:{
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#111111',
    paddingVertical: 19,
    paddingHorizontal: 82,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})