import React, { Component } from 'react';  
import {
    StyleSheet,
    Button,
    Text,
    View,
  } from "react-native";
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'; 

  export default class HomeScreen extends Component {  
    static navigationOptions = {  
         title: 'Home',  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Appbar style={styles.bottom}>
                    <Appbar.Action
                        icon="menu"
                        color="black"
                        onPress={() => { this.props.navigation.openDrawer() }}
                    />
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Appbar.Action
                            icon={({color, size}) => (
                                <Icon 
                                name="scan-sharp" 
                                color={color}
                                size={size}
                                />
                            )}
                            color="black"
                            onPress={() => { this.props.navigation.openDrawer() }}
                        />
                    </View>
                   
                </Appbar>
                <Text>Home Screen</Text>
                <Button
                    title="Show QR Code"
                    onPress={() =>  this.props.navigation.navigate('QRCode')}
                />
        </View>


        );  
    }  
}  

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        backgroundColor:'white',
        left: 0,
        right: 0,
        top: 0,
    },
});