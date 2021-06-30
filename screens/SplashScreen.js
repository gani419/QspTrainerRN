import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import {AsyncStorage} from 'react-native';  
  
//   import AsyncStorage from "@react-native-community/async-storage";

// const SplashScreen = () => {
//     const navigation = useNavigation();

//     function componentDidMount(){
//                 setTimeout(() => {
//                     navigation.navigate('Home')
//                }, 4000);
//     }
//     return (
//         <View style = {styles.container}>
//             <Image style={styles.imageStyle } source={require("./assets/qspiders.png")} />
//         </View>
//     );
// }
// export default SplashScreen;







  
  export default class SplashScreen extends React.Component {

    // componentDidMount(){
    //     setTimeout(() => {
    //         AsyncStorage.getItem("username")
    //   .then(username => {
    //     if(username!=null){
    //         this.props.navigation.replace('HomeScreen')
    //     }else{
    //         this.props.navigation.replace('LoginScreen')
    //     }
    //   })
    //   .done();
    //            }, 4000);
    // }  




    componentDidMount(){
        setTimeout(() => {
            AsyncStorage.getItem("username").then(username => {
                if(username!=null){
                    this.props.navigation.replace('Home')
                }else{
                    this.props.navigation.replace('LoginScreen')
                }
            }).done();
            // this.props.navigation.replace('Home')
        }, 4000);
    }  

    render(){
        console.disableYellowBox = true;
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>
                <Image style={styles.imageStyle } source={require("./assets/qspiders.png")} />
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
    imageStyle: {
        width:'100%',
        height:'30%'
    }
  });