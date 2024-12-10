import React, { memo } from 'react'

const AddTodo = ({ AddTodoHandle, inputHandle, todoItem }) => {
console.log('AddTodo Render edildi')
    return (
        <form>
            <input
                value={todoItem}
                onChange={inputHandle}
                type="text"
                placeholder='todo task'
            />

            <button onClick={AddTodoHandle}>Add</button>
        </form>
    )
}

export default memo(AddTodo)