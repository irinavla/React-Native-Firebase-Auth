import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import firebase from 'react-native-firebase'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  render() {
    const { email, password, errorMessage } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Sign up</Text>
        {errorMessage &&
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        }

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={email}
        />

        <TextInput
          placeholder="Password"
          textContentType="password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={password}
        />

        <Button title="Sign up" onPress={this.handleSignUp} />
        <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})