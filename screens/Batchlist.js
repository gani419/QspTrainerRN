import React, { Component } from 'react';  
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";

export default class Batchlist extends Component {  

  static navigationOptions = {  
    title: 'Batch List',  
  };  
    render() {  
        return (
            <View style={styles.container}>
              <Text>Batch List</Text>
            </View>
        );
    }  
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', 
    },
  });