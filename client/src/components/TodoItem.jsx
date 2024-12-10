import React, { memo } from 'react'

const TodoItem = ({todo}) => {
    console.log(`${todo.name} render oldu`)
    return (
        <li>{todo.name}</li>

    )
}

export default memo(TodoItem)