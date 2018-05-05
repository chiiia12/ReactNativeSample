import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { View, StyleSheet, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <VisibleTodoList onPressItem={() => this.props.navigation.navigate('Detail')} />
                <AddTodo />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
    }
});

export default Main 