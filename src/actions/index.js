/**
 * Created by Igor on 05.11.2016.
 */
import {ADD_TODO, TOGGLE_TODO} from '../constants'
import  { fetchTodos } from '../api'
import shortid from 'shortid'

const fetchTodo = (filter) => (dispatch) => {
          dispatch({
              type: 'FETCHING'
          });

          return fetchTodos(filter)
              .then((todos) => {
                  let type = 'FETCH_TODO_ALL';

                  if (filter === 'done'){
                      type = 'FETCH_TODO_DONE'
                  } else if (filter === 'undone'){
                      type = 'FETCH_TODO_UNDONE'
                  }

                  return dispatch({
                            type,
                            todos
                         })
                  }
              )
              .then(() => (dispatch({
                      type: 'FETCHED'
                  })
              ))
}


const AddNewTodo = (text) => {
    let id = shortid();

    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            text,
            id
        });
        return fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done:false,
                id,
                text: text
            })
        });
    }
}

const ToggleTodo = (id) => (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            id
        })
        return fetch('/toggle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });
}

const actionDel = (id) => (dispatch) => {
        dispatch({
            type: 'DEL_TODO',
            id
        })
        return fetch('/deltodo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });
}


export {ToggleTodo, AddNewTodo, fetchTodo, actionDel}
