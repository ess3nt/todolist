import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import ListOfTodo from '../containers/ListOfTodo'
import { Filter } from '../components/Filter'

export default class App extends Component {
  render() {
    return (
        <div>
            <h2>TodoList2 by Igor</h2>
            <AddTodo />
            <ListOfTodo />
            <Filter />
        </div>
    )
  }
}


