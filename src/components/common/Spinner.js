import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
    render() {
        const { spinnerSize } =  this.props;

        return(
            <View style={ styles.spinner }>
              <ActivityIndicator size={ spinnerSize || 'large' } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});