import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import { View, button, ScrollView, FlatList } from 'react-native'
import { List, ButtonGroup } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { todos, onTodoClick, onPressItem } = this.props
        return (
            <View>
                <ScrollView>
                    <List containerStyle={{ marginTop: 0 }}>
                        {todos.map(todo => (
                            <Todo key={todo.id}{...todo} onClick={() => onTodoClick(todo.id)} onPressItem={onPressItem} />
                        ))}
                    </List>
                </ScrollView>
            </View>
        )
    }
}
export default TodoList