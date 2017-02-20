'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      showProgress: false,
      isError: false,
    }
  }

  render() {
    var errCntrl = <View />
    if(this.state.isError)
    {
      errCntrl = <Text style={styles.failedLoginErrorMsg}>Wrong Credentials</Text>
    }
  return(

      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('../../icon.png')}
        />
        <Text style={styles.heading}>FOTOS</Text>
        <Text style={styles.subHeading}>Memories worth to remember</Text>
        <TextInput
          onChangeText={(text)=> this.setState({username:text})}
          style={styles.input}
          placeholder='username'/>
        <TextInput
          onChangeText={(text)=> this.setState({password:text})}
          style={styles.input}
          placeholder='password'
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onLoginPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        {errCntrl}
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
            style={styles.loader}
          />

      </View>
    );
  }

  onLoginPressed = () => {
    this.setState({showProgress: true});
    if(this.state.username == 'sourabh' && this.state.password == '12345')
    {
      this.props.onLogin();
    }
    this.setState({isError:true});
    this.setState({showProgress: false});
  }
}


const styles = StyleSheet.create({

  container:{
    ...Platform.select({
      ios: {
    backgroundColor: '#d3d3d3',
  },
  android:{
    backgroundColor: '#faebd7',
  },
}),
    flex: 1,
    alignItems: 'center',
    paddingTop:40,
    padding:10
  },

  logo: {
    marginTop:50,
    width:66,
    height:66,
  },

  heading: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    ...Platform.select({
      ios: {
      height: 45,
      marginTop: 10,
      padding: 3,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#000000'
    },
    android: {
      height: 45,
      width:350,
      marginTop: 10,
      padding: 3,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#000000'
    }
  }),
  },
  button: {
    height: 40,
    backgroundColor:'#000000',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf:'stretch',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    padding:10,
    color: '#f0ffff',
    alignSelf: 'center'
  },
  loader: {
    marginTop: 10,
  },
  failedLoginErrorMsg: {
    color: 'red',
    marginTop: 10,
  }
})



module.exports = Login;
