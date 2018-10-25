import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import firebase from "firebase";

export class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({
      error: "",
      loading: true
    })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailed)
      });
  };

  onLoginSuccess = () => {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    })
  }

  onLoginFailed = () => {
    this.setState({
      loading: false,
      error: "Authentication failed"
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="user@domain.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Sssstt ..."
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00'
  }
}

export default LoginForm;
