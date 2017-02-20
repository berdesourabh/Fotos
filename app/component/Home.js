import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state= {
      selectedImage: 'welcomeImage',
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
module.exports = Home;
