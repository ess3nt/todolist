/**
 * Created by Igor on 03.11.2016.
 */
import React, {Component} from 'react'
import {Add} from '../components/Add'
import { connect } from 'react-redux'
import { AddNewTodo } from '../actions'

class AddTodo extends Component {
    render(){
        const AddNewTodo = this.props.AddNewTodo;
        return(
            <div>
                <Add AddNewTodo={AddNewTodo}/>
            </div>
        )
    }
}

export default connect(null, {AddNewTodo})(AddTodo)



