import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import { StackNavigator } from 'react-navigation';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            // dispatch(toggleTodo(id))
            dispatch(removeTodo(id))
        },
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList