import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import SvgUri from 'react-native-svg-uri';

class Todo extends Component {
    render() {
        let { onClick, completed, text } = this.props
        let completeStyle = completed ? { name: "done", color: "green" } : { name: "work" }
        return (
            // <ListItem
            //     title={text}
            //     rightIcon={completeStyle}
            //     onPressRightIcon={onClick}
            // >
            <View>
                <SvgUri
                    width="200"
                    height="200"
                    source={{ uri: 'https://github.com/users/chiiia12/contributions' }}
                />
            </View>
            // </ListItem>
        )
    }
}
export default Todo