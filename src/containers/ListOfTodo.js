/**
 * Created by Igor on 03.11.2016.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Todolist } from '../components/listOfTodos'
import * as actions from '../actions'

class ListOfTodos extends Component {

   componentDidMount(){
       this.props.fetchTodo(this.props.filter);
   }

    componentWillReceiveProps(nextProps){
        if (this.props.filter !== nextProps.filter ){
            this.props.fetchTodo(nextProps.filter);
        }
    }

    render(){
        const {ToggleTodo, todos, actionDel} = this.props;
        if (todos === true){
            return <p>Fetching...</p>
        }

        return(
            <ul>
                <Todolist todos={todos} actionToggle={ToggleTodo} actionDel={actionDel}/>
            </ul>
        )
    }
}

const mapStateToProps = (state, {params}) => {
        return {
            todos: state.fetching.fetching || state.todos,
            filter: params.filter || 'all'/*,
            fetching: state.fetching*/
        }
};

export default withRouter(connect(mapStateToProps, actions)(ListOfTodos))