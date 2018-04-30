import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import { View, button, ScrollView, FlatList } from 'react-native'
import { List, ButtonGroup } from 'react-native-elements'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        const filter = [
            { index: 0, filter: "SHOW_ALL" },
            { index: 1, filter: "SHOW_ACTIVE" },
            { index: 2, filter: "SHOW_COMPLETED" },
        ].find(({ index, filter }) => index === selectedIndex).filter
        this.props.filterTodos(filter)
        this.setState({ selectedIndex })
    }
    render() {
        let { todos, onTodoClick } = this.props
        const buttons = ['ALL', 'ACTIVE', 'COMPLETE']
        const { selectedIndex } = this.state
        return (
            <View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                />
                <ScrollView>
                    <List containerStyle={{ marginTop: 0 }}>
                        {todos.map(todo => (
                            <Todo key={todo.id}{...todo} onClick={() => onTodoClick(todo.id)} />
                        ))}
                    </List>
                </ScrollView>
            </View>
        )
    }
}
export default TodoList