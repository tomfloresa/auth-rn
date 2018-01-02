import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

export default class LoginForm extends Component {
    state = { text: '' };
    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput style={{ height: 20, width: 20 }} 
                               value={ this.state.text } 
                               onChangeText={ text => this.setState({ text }) }/>
                </CardSection>

                <CardSection/>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}