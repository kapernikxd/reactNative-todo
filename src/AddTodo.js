import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Названия дела не может быть пустым')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Введите название дела...'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button title='Добавить' onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    fontSize:24,
    
  },

})
