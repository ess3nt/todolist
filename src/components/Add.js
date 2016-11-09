/**
 * Created by Igor on 03.11.2016.
 */
import React, { Component } from 'react'

class Add extends Component {
    eventHandler(e){
        let value = this.refs.text.value.trim();
        e.preventDefault();
        this.refs.text.value ? this.props.AddNewTodo(value) : '';
        this.refs.text.value = '';
    }
    render(){
        return(
            <div>
                <form onSubmit={::this.eventHandler}>
                    <input type='text' placeholder='need todo...' ref="text"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export {Add}







