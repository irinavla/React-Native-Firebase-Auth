import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Image, TextInput, Button } from 'react-native';
import firebase from 'react-native-firebase';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  logOut() {
    firebase.auth().signOut()
      .then(() => console.log('success'))
      .catch(err => console.log(err));
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/ReactNativeFirebase.png')} style={[styles.logo]} />
        <Text> Hello {currentUser && currentUser.email} </Text>
        <Button title="Log out" onPress={this.logOut} />
      </View>
    )
  }
}

export default Main