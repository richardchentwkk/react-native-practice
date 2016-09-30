/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

class home_gateway_assistant extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('./images/Arcelik_Logo.png')}
        />

        <TextInput
          style={styles.edittext}
          onChangeText={(text)=>this.setState({text})}
          placeholder="Please enter your email"
          keyboardType='email-address'
          underlineColorAndroid='rgba(0,0,0,0)'
        />


        <TextInput
          style={styles.edittext}
          placeholder="Please enter your password"
          keyboardType='numeric'
          underlineColorAndroid='rgba(0,0,0,0)'
        />

        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginTop:20,
    marginBottom: 5,
    marginLeft:25,
  },
  logo:{
    marginTop:20,
    marginLeft:20,
    width:200,
    height:50,
  },
  edittext:{
    width:250,
    height:40,
    marginTop:10,
    marginLeft:25,
    borderColor:'gray',
    borderWidth:0.5,
  }
});

AppRegistry.registerComponent('home_gateway_assistant', () => home_gateway_assistant);
