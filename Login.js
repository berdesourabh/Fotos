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
} from 'react-native';
import buffer from 'buffer';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      showProgress: false,
    }
  }

  render() {
    var errorView = <View />;
    if(this.state.badCredentials){
      errorView = <Text style={styles.error}>Wrong Username or Password</Text>;
    }

    return(
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('./user_login_logo.png')}
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
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        {errorView}
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
            style={styles.loader}
          />
      </View>
    );
  }

  onLoginPressed(){
    this.setState({showProgress: true});

    var b = new buffer.Buffer(this.state.username +
      ':' + this.state.password);
    var encodedAuth = b.toString('base64');

    fetch('https://api.github.com/user',{
      headers: {
        'Authorization' : 'Basic ' + encodedAuth
      }
    })
      .then((response)=>{
        if(response.status >= 200 && response.status < 300 )
        {
          return response;
        }
        throw{
          badCredentials: response.status == 401,
          unknownError: response.status != 401,
        }
      })
      .then((response)=>{
        return response.json();
      })
      .then((results)=> {
        console.log(results);
      })
      .catch((err)=>{
        this.setState(err);
      })
      .finally(()=>{
        this.setState({showProgress: false});
      }
    )


  }
}



var styles = StyleSheet.create({

  container:{
    backgroundColor: '#d3d3d3',
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
      height: 45,
      marginTop: 10,
      padding: 3,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#000000'
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
  error: {
    color: 'red',
    marginTop: 10,
  }
})

module.exports = Login;
