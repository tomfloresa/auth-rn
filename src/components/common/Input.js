import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default class Input extends Component {
    render() {
        const { label } = this.props;

        return(
            <View>
                <Text>
                    { label }
                </Text>
            </View>
        );
    }
}