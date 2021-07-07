import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import axios from 'axios'
import Spinner from "react-native-spinkit";
import AsyncStorage from "@react-native-community/async-storage";

export default class LoginScreen extends React.Component  {

  static navigationOptions = {
    header: null ,
  };

  state = {
    username : '',
    password : '' 
  }

  // componentDidMount(){
  //   var username = AsyncStorage.getItem('username');
  //   if(username!=null){
  //     this.props.navigation.replace('HomeScreen')
  //   }
  // }

  // onUsernameChange(usernamel) {
    
  //   ToastAndroid.show(usernamel, ToastAndroid.SHORT)
  // }

  onPressButton() {   
    if (this.state.username.trim() === "") {
      ToastAndroid.show("success", ToastAndroid.SHORT)
      // this.setState(() => ({ nameError: "First name required." }));
    } else { 
      ToastAndroid.show("fail", ToastAndroid.SHORT)
      // this.setState(() => ({ nameError: null }));
    }
    ToastAndroid.show('success', ToastAndroid.SHORT)
    Alert.alert({this:state.username})  
  }


  
  // static navigationOptions = { 
  //     title: 'Login Screen',
  //     //Sets Header text of Status Bar
  //     headerStyle: {
  //       backgroundColor: '#f4511e',
  //       //Sets Header color
  //     },
  //     headerTintColor: '#fff',
  //     //Sets Header text color
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //       //Sets Header text style
  //     },
  //   };


  render(){
    console.disableYellowBox = true;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <View style={{flexDirection: 'row',alignSelf: 'flex-end',paddingRight:30,}}>
          <Image style={styles.shareIcon} source={require("./assets/whatsapp.png")} />
          <Image style={styles.shareIcon} source={require("./assets/call.png")} />
          <Image style={styles.shareIcon} source={require("./assets/share.png")} />
        </View> */}
        {this.state.showTheThing && 
        <Spinner style= {{position:'absolute'}} color = {'orange'} size = {40} type = {'CircleFlip'}/>
        }
        <View style={styles.containerInner}>
          <Image style={styles.image} source={require("./assets/qspiders.png")} />
  
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              // onChangeText={this.onUsernameChange}
            />
          </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
  
          <TouchableOpacity style={styles.loginBtn}  
          // onPress={this.onPressButton}  
          onPress={() => {
            if (this.state.username.trim() === "") {
              ToastAndroid.show("Please Enter Username", ToastAndroid.SHORT)
            } else if(this.state.password.trim() === "") {
              ToastAndroid.show("Please Enter Password", ToastAndroid.SHORT)
            }else{
              this.setState({showTheThing: true}) 
              callApi(this.state.username,this.state.password,this)
            }
          }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.createAccountBtn}>
            <Text style={styles.loginText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    ); 
  }
}

function callApi(username,password,self){
  const { navigate } = self.props.navigation;
//   var data = {
//     "name": username,
//     "job": password
//  }
 
//  fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: headers,
//     body:  JSON.stringify(data)
//   })
//   .then(function(response){ 
//    return response.json();   
//   })
//   .then(function(data){ 
//   console.log(data)
//   });



  axios.post('https://qsaas.qspiders.com/manager/login/', {
    username: username,
    password: password
  })
  .then((response) => {
    self.setState({showTheThing: false}) 
    // navigate('HomeScreen')
    AsyncStorage.setItem('username',username)
    self.props.navigation.replace('Home')
    ToastAndroid.show(response.data.user.username, ToastAndroid.SHORT)
    console.log(response);
  }, (error) => {
    ToastAndroid.show('error', ToastAndroid.SHORT)
    console.log(error); 
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerInner: {
    marginTop: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth:1,
    width:"90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 20,
    marginBottom: 40,
  },

  shareIcon: {
    marginLeft:20,
    marginBottom: 10,
    width:30,
    height:30,
  },

  inputView: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth:1,
    // backgroundColor: "#f0994e",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    color:'#000000'
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#f7991b",
  },

  createAccountBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: "center",
    backgroundColor: "#f7991b",
  },

  loginText:{
    color:'#fff'
  },
  spinnerStyle: {
    flex: 1,
    alignSelf:'center'
}
});