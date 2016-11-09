import {ADD_TODO,
        TOGGLE_TODO,
        DEL_TODO,
        FETCH_TODO_ALL,
        FETCH_TODO_DONE,
        FETCH_TODO_UNDONE
} from '../constants'
import { combineReducers } from 'redux'


const fetching = (state = {fetching: false}, action) => {
    switch (action.type){
        case 'FETCHING':
            return {...state, fetching: true}
        case 'FETCHED':
            return {...state, fetching: false}
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
            return [...state, {
                text: action.text,
                id: action.id,
                done: false
            }];
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                } else {
                    return {...todo, done: !todo.done}
                }
            });
        case DEL_TODO:
            let newState = state.filter(todo => {
                if (todo.id !== action.id){
                    return true;
                }
            });
            return newState;
        case FETCH_TODO_ALL:
            return [...action.todos];
        case FETCH_TODO_DONE:
            return [ ...action.todos];
        case FETCH_TODO_UNDONE:
            return [...action.todos];
        default:
            return state;
    }
}

export const Reducer = combineReducers({
    todos,
    fetching
    }
)




