import React, { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


const App = () => {

  console.log('App render edildi')

  const [todos, setTodos] = useState([])
  const [todoItem, setTodoItem] = useState("")

  const [counter, setCounter] = useState(0)

 
 

  const inputHandle = useCallback(e => {
    setTodoItem(e.target.value)
  }, [])


  const AddTodoHandle = useCallback(e => {
    e.preventDefault()
    let newTodo = {
      name: todoItem,
    }
    setTodos([...todos, newTodo])
    setTodoItem("")
  }, [todoItem])


  return (
    <div>
      <h1>useMemo useCallback</h1>
      <Nav />
      <br />
      <section>

        <AddTodo
          AddTodoHandle={AddTodoHandle}
          inputHandle={inputHandle}
          todoItem={todoItem}
        />

        <Todos todos={todos} />

      </section>

      <Footer />

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  )
}

export default App