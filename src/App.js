import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/common/Header';

import LoginForm from './components/LoginForm';
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

import firebase from 'firebase'; 

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyCN0xJ0CZtPNSKhr-uPjlw_No5DQy2GY00',
          authDomain: 'uth-ffc15.firebaseapp.com',
          databaseURL: 'https://auth-ffc15.firebaseio.com',
          projectId: 'auth-ffc15',
          storageBucket: 'auth-ffc15.appspot.com',
          messagingSenderId: '446566411312'
        });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return <Button onPress={ () => firebase.auth().signOut() }>Log Out!</Button>;
          break;
        case false:
          return <LoginForm/>;
          break;
         default:
          return <Spinner spinnerSize={ 'large' }/>
          break;
      }
    }

    render() {
      const { container, content } = styles;
  
      return (
        <SafeAreaView style={ container }>
          <Header title={ 'Albums' }/>
          { this.renderContent() }
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