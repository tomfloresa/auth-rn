import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/common/Header';

import LoginForm from './components/LoginForm';

import firebase from 'firebase'; 

export default class App extends Component {
    componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyCN0xJ0CZtPNSKhr-uPjlw_No5DQy2GY00',
          authDomain: 'uth-ffc15.firebaseapp.com',
          databaseURL: 'https://auth-ffc15.firebaseio.com',
          projectId: 'auth-ffc15',
          storageBucket: 'auth-ffc15.appspot.com',
          messagingSenderId: '446566411312'
        });
    }

    render() {
      const { container, content } = styles;
  
      return (
        <SafeAreaView style={ container }>
          <Header title={ 'Albums' }/>
          <LoginForm/>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#786DF4',
      paddingLeft: 10,
      paddingRight: 10,
    },
  });