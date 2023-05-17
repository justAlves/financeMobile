import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

import { Calendar, LocaleConfig } from 'react-native-calendars'

export default function CalendarModal() {
  return (
    <View style={styles.modal}>
      <View style={styles.container}>

      <Calendar
        style={styles.calendar}
        theme={{
          calendarBackground: '#252525',
          arrowColor: '#ffffff',
          monthTextColor: '#ffffff',
          todayTextColor: '#ffffff',
          dayTextColor: '#7D7D7D',
          textDisabledColor: '#7D7D7D'
        }}
        enableSwipeMonths
      />

      <TouchableOpacity>
        <Text>Filter</Text>
      </TouchableOpacity>

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

})