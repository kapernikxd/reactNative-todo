import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'test' },
    { id: 2, title: 'test' },
    { id: 3, title: 'test' },
    { id: 4, title: 'test' },
    { id: 5, title: 'test' },
    { id: 6, title: 'test' },
    { id: 7, title: 'test' }
  ])

  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

  

    // setTodos(todos.concat([ newTodo ]))
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }


  return (
    <View style={styles.container}>
      <Navbar title='Todo Apps!' />
      <AddTodo onSubmit={addTodo}/>

      <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})
