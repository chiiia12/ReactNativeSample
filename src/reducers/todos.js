import {
    ADD_INFO,
    ADD_TODO,
    TOGGLE_TODO
} from '../actions/types'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INFO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    artist: action.artist,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'REMOVE_TODO':
            return state.filter(todo =>
                todo.id != action.id
            )
        default:
            return state
    }
}
export default todos