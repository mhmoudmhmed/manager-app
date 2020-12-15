/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import connect from 'react-redux';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LogForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };
  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }
  logInSuccess = () => {
    const { email, password } = this.props;
    this.props.loginUser( { email, password });
  }
  render() {
    const { email, password, error, loading } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            value={email}
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="password"
            value={password}
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        {error ? <Text style={styles.textStyle}> {error} </Text> : null}
        <CardSection>
          {loading ? <Spinner size="large" /> :
          (
            <Button onPress={() => this.logInSuccess.bind(this)}>
              Login
            </Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LogForm);
