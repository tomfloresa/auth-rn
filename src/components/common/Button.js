import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
    render() {
        const { buttonStyle, buttonText } = styles;
        return(
            <TouchableOpacity style={ buttonStyle } onPress={ this.props.onPress }>
                <Text style={ buttonText }>{ this.props.children }</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fefe',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fefe',
    },
    buttonText: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
});