import React, { memo } from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
    console.log('Todos render oldu')
    return (
        <ul>
            {
                todos?.map((todo) => {
                    return <TodoItem todo={todo}/>
                })
            }
        </ul>
    )
}

export default memo(Todos)