import { useState } from "react";
import { Button } from "./Button"
import { TodoCard } from "./TodoCard";

const initialTodos = [
    {
        id: 0,
        title: 'i"m coll',
        description: 'my first project in js',
        colorsIndex: 0
    },

    {
        id: 1,
        title: 'heyy man',
        description: 'my first project in js',
        colorsIndex: 3
    },

    {
        id: 2,
        title: 'Reacti oyren',
        description: 'Farid',
        colorsIndex: 5
    },

    {
        id: 3,
        title: 'Reacti oyren',
        description: 'Farid',
        colorsIndex: 6
    }
]


export function ToDo() {
    const [todos, setTodos] = useState(initialTodos)
    return (

        <div className="container">
            <h1>welcome to react</h1>
            <Button
                text='Add todo list'
                txtColor="white"
                bgColor='orange'
                onClick={() => {
                    let id = todos.length
                    let title = prompt('add a title')
                    let description = prompt('add a description')
                    let colorsIndex = Math.floor(Math.random() * 12)
                    setTodos([...todos, { id, title, description, colorsIndex }])
                }}
            />
            {
                todos.map((obj) => {
                    console.log(obj.id) //we are al thing write and end return something
                    return <TodoCard
                        // key={id} id={id} title={title} description={description} colorsIndex={colorsIndex}
                        onDelete={() => {
                            setTodos(
                                todos.filter((elem) => elem.id !== obj.id)
                            )
                        }}

                        onEdit={() => {
                            setTodos(
                                todos.map((elem) => {
                                    if (elem.id === obj.id) {
                                        return {
                                            id: elem.id,
                                            title: prompt('enter new title', elem.title),
                                            description: prompt('enter new description', elem.description),
                                            colorsIndex: elem.colorsIndex
                                        }
                                    }
                                    return elem;
                                }))

                        }}

                        key={obj.id}
                        item={obj}
                    />
                })
            }
        </div>
    )
}
