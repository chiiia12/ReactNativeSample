import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, getRequest,addInfo } from '../actions'
import { View, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native'


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ""
        }
    }
    _addTodo() {
        this.props.addTodo(this.state.todo)
        this.setState({ todo: "" })
    }
    render() {
        return (
            <View style={style.inputForm}>
                <TextInput
                    style={style.inputField}
                    value={this.state.todo}
                    onChangeText={(todo) => this.setState({ todo })} />
                <TouchableHighlight style={style.btn} onPress={() => this._addTodo()}>
                    <Text style={style.btn_text}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            // dispatch(addTodo(text))
            dispatch(getRequest(text))
        }
    }
}
const style = StyleSheet.create({
    inputForm: {
        flex: 0,
        flexDirection: "row",
        padding: 5,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: '#F0FBFF',
        shadowOpacity: 1.0,
    },
    inputField: {
        flex: 1,
        padding: 6,
        backgroundColor: "#F0FBFF",
        borderRadius: 5
    },
    btn: {
        borderRadius: 5,
        backgroundColor: "#167ACC",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#F0FBFF',
        shadowOpacity: 0.5,
    },
    btn_text: {
        color: "#F0FBFF",
        fontWeight: "bold"
    }
});
export default connect(() => { return {} }, mapDispatchToProps)(AddTodo)