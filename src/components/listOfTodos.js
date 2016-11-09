/**
 * Created by Igor on 03.11.2016.
 */
import React from 'react'

const Todolist = ({todos, actionToggle, actionDel}) => {
    function eventHandler(todo, e) {
        e.preventDefault();
        actionToggle(todo)
    }
    function eventHandlerButton(id, e) {
        e.preventDefault();
        actionDel(id)
    }
    let list = todos.map(todo => {
        return (
            <div key={todo.id}>
                <li style= {{ textDecoration: (todo.done ? 'line-through' : 'none'),
                              cursor: 'pointer',
                              display: 'inline-block'}}
                    onClick={eventHandler.bind(null, todo.id)}
                >
                {todo.text}
                </li>
                <button style= {{ display: 'inline-block',
                                  marginLeft: '100px'}}
                        onClick={eventHandlerButton.bind(null, todo.id)}
                >
                del
                </button>
            </div>
        )
    });

    return (<div>
        {list}
        </div>)
}



export {Todolist}




