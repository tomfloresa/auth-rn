import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';

export default class Input extends Component {
    render() {
        const { label, value, onChangeText, placeholder, autoCorrect, isSecure } = this.props;
        const { inputStyle, labelStyle, containerStyle } = styles;

        return(
            <View style={ containerStyle }>
                <Text style={ labelStyle }>
                    { label }
                </Text>
                <TextInput autoCorrect={ autoCorrect }
                           secureTextEntry={ isSecure }
                           placeholder={ placeholder }
                           value={ value }
                           onChangeText={ onChangeText } 
                           style={ inputStyle } />
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
