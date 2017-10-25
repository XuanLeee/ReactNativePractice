/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import Button from 'react-native-button';

import {validate} from './ios/validation';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Input,
  View,
  Dimensions,
  AlertIOS,
  AppRegistry,
} from 'react-native';


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
    
      enter:null,
      enterError:false,
      enterErrorMessage:'',
 
      inputPassword:null,
      inputPasswordError:false,
      inputPasswordErrorMessage:''
  };
      
 }
        
  
   _onPressButton(){
     AlertIOS.alert('You tapped the button!');
  };
  
  render() {
    
    return (
      <View style={styles.container}> 
              
         <View style={styles.toolbar}>     
                <Text style={styles.toolbarTitle}>Signup</Text>
         </View>


         <TextInput 
          style={[styles.text, this.state.enterError?styles.error:null]}
          placeholder="Email" 
          onChangeText={(enter)=>{

            this.setState({enter:enter});
            let v = validate('email',enter);
            this.setState({enterError:!v[0],enterErrorMessage:v[1]})
          }
          }
          /> 
          <Text style={styles.error}>
          {this.state.enterErrorMessage}
          </Text>    




         <TextInput 
         style={[styles.text,this.state.inputPasswordError?styles.error:null]}
         placeholder="Password" 
         onChangeText={(inputPassword)=>{
            this.setState({inputPassword:inputPassword});
            let p = validate('password',inputPassword);
            this.setState({inputPasswordError:!p[0],inputPasswordErrorMessage:p[1]})
          }}
         />

         <Text style={styles.error}>
          {this.state.inputPasswordErrorMessage}
          </Text>  




        <Button style={styles.buttons}
         onPress={this._onPressButton}>
         Sign Up
        </Button>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbarTitle:{
        fontSize: 20, 
        color:'#000000',
        textAlign:'center',
        fontWeight:'bold',
        flex:1              
    },
    toolbar:{
       
        paddingTop:50,
        paddingBottom:30,
        flexDirection:'row'    
    },
 
  text: {
    margin: 20,
    paddingBottom:5,
    paddingTop:5,
    fontSize: 20,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 2
},
 
 buttons:{
    fontSize: 20, 
    color: '#ffffff',
    backgroundColor:'#cc0000',
    borderColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom:10, 
    paddingTop:10,
    width: 180,  
    textAlign:'center',  
    alignSelf: 'center'
 },
 error:{
    margin:20,
    fontSize: 10,
    paddingBottom:1, 
    paddingTop:1,
    color:'#cc0000',
    borderBottomColor: '#cc0000',
 },
  
});

AppRegistry.registerComponent('App', () => App);