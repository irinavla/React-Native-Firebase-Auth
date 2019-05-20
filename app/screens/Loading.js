import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      console.log(user);
      this.props.navigation.navigate(user ? 'Main' : 'SignUp');
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
        <ActivityIndicator />
      </View>
    )
  }
}

export default Loading