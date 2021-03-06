
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './Login';

export default class Fotos extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
  }
  render() {
    if(this.state.isLoggedIn)
    {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome</Text>
          </View>
      );
  }else{
    return (
      <Login onLogin = {this.onLogin}/>
    );
  }
  }
  onLogin() {
    this.setState({isLoggedIn:true});
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Fotos', () => Fotos);
