import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, setVisibilityFilter, removeTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            // dispatch(toggleTodo(id))
            dispatch(removeTodo(id))
        },
        filterTodos: filter => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList