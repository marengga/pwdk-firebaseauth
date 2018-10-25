import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Button, Spinner } from "./src/components/common";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDtv55kpfB5537VbbA6BUuugwM-Y8E_jOA",
      authDomain: "purwadhika-akm.firebaseapp.com",
      databaseURL: "https://purwadhika-akm.firebaseio.com",
      projectId: "purwadhika-akm",
      storageBucket: "purwadhika-akm.appspot.com",
      messagingSenderId: "407430338118"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
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
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
