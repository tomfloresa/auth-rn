import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import firebase from 'firebase';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPressed() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(this.onLoginSucess.bind(this))
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then(this.onLoginSucess.bind(this))
                            .catch(this.onLoginFailed.bind(this))
                })
    }

    onLoginSucess() {
        this.setState({ error: '', loading: false, email: '', password: '' });
    }

    onLoginFailed() {
        this.setState({ error: 'Authentication failed', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner spinnerSize={ 'small' }/>
        }

        return(
            <Button onPress={ this.onButtonPressed.bind(this) }>
                Log In
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input placeholder={ 'tomas@gmail.com' }
                           autoCorrect={ false }
                           label={ 'Email' }
                           value={ this.state.email } 
                           onChangeText={ email => this.setState({ email }) }/>
                </CardSection>

                <CardSection>
                    <Input placeholder={ 'password' }
                           isSecure={ true }
                           autoCorrect={ false }
                           label={ 'Password' }
                           value={ this.state.password } 
                           onChangeText={ password => this.setState({ password }) }/>
                </CardSection>

                <Text style={ styles.error }>
                  { this.state.error }
                </Text>

                <CardSection>
                  { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});