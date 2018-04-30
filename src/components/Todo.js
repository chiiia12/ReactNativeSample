import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import { ListItem } from 'react-native-elements'

class Todo extends Component {
    render() {
        let { onClick, completed, text } = this.props
        let completeStyle = completed ? { name: "done", color: "green" } : { name: "work" }
        return (
            <ListItem
                title={text}
                rightIcon={completeStyle}
                onPressRightIcon={onClick}
            />
        )
    }
}
export default Todo