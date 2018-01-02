import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={ styles.header }>
                <Text>
                    { this.props.title }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#786DF4',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
