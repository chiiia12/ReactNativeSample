import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri';

class Todo extends Component {
    render() {
        let { onClick, completed, title, artist } = this.props
        let completeStyle = completed ? { name: "done", color: "green" } : { name: "work" }
        return (
            <ListItem
                title={title}
                rightIcon={completeStyle}
                onPressRightIcon={onClick}
            >
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </ListItem>
        )
    }
}
export default Todo