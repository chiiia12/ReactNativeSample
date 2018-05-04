import {
    ADD_INFO,
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    GET_CONTRIBUTION,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE,
} from './types'
import axios from 'axios';

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
})
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
})
export const getContribution = () => ({
    type: 'GET_CONTRIBUTION'
})

export const getRequestSuccess = (json) => {
    console.log("getRequestSuccess")
    return {
        type: 'GET_REQUEST_SUCCESS',
        posts: json,
        receivedAt: Date.now()
    }
}
export const getRequestFailure = (err) => {
    console.log("getRequestFailure")
    return {
        type: 'GET_REQUEST_FAILURE',
        err
    }
}
export const addInfo = (data) => {
    console.log("addInfo")
    return {
        id:nextTodoId++,
        type: 'ADD_INFO',
        title:data.title,
        artist:data.artist,
    }
}
export const getRequest = text => {
    console.log("getRequest")
    return (dispatch) => {
        dispatch(getContribution())
        // return axios.get(`https://github.com/users/chiiia12/contributions`)
        // return axios.get(`https://api.github.com/users/chiiia12`)
        return axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                dispatch(addInfo(res.data[0]))
            })
            .catch(err => {
                dispatch(getRequestFailure(err))
            })
    }
}