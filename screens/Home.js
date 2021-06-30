import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';  
import HomeScreen from "./HomeScreen"
import Batchlist from "./Batchlist"
import Sidebar from "./DrawerContent"

  const Drawer = createDrawerNavigator()

  const Home = () => {
      return(
        <Drawer.Navigator drawerContent={props=> <Sidebar {...props}/> }>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Batchlist"
                component={Batchlist}
                options={{ drawerLabel: 'Batchlist' }}
            />
      </Drawer.Navigator>
      );
  }
export default Home;


































// import React, { Component } from 'react';  
// import { StyleSheet, Alert } from 'react-native';  
// import Icon from 'react-native-vector-icons/Ionicons';  
  
// import {  
//     createSwitchNavigator,  
//     createAppContainer  
// } from 'react-navigation';  
// import { createStackNavigator} from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import Batchlist from "./Batchlist";
// import HomeScreenDrawernav from "./HomeScreenDrawernav";

// const showAlert = () =>
//   Alert.alert(
//     "Alert Title",
//     "My Alert Msg",
//     [
//       {
//         text: "Cancel",
//         onPress: () => Alert.alert("Cancel Pressed"),
//         style: "cancel",
//       },
//     ],
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           "This alert was dismissed by tapping outside of the alert dialog."
//         ),
//     }
//   );

// export default class Home extends Component {  

//     render() {  
//         console.disableYellowBox = true;
//         const { navigate } = this.props.navigation;
//         return <AppContainer />;  
//     }  
// }   
  
// const HomeStackNavigator = createStackNavigator(  
//     {  
//         HomeNavigator: HomeScreenDrawernav  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//         return {  
//             headerLeft: (  
//                 <Icon  
//                     style={{ paddingLeft: 10 }}  
//                     onPress={() => navigation.openDrawer()}  
//                     name="md-menu"  
//                     size={30}  
//                 />  
//             ),
//             headerRight:(
//                 <Icon  
//                     style={{ paddingRight: 10 }}  
//                     onPress={showAlert}  
//                     name="scan-sharp"  
//                     size={30}  
//                 />  
//             )
//         };  
//         }  
//     }  
// );  
  
// const BatchListStackNavigator = createStackNavigator(  
//     {  
//         BatchListNavigator: Batchlist  
//     },  
//     {  
//         defaultNavigationOptions: ({ navigation }) => {  
//             return {  
//                 headerLeft: (  
//                     <Icon  
//                         style={{ paddingLeft: 10 }}  
//                         onPress={() => navigation.openDrawer()}  
//                         name="md-menu"  
//                         size={30}  
//                     />  
//                 )  
//             };  
//         }  
//     }  
// );  

// const AppDrawerNavigator = createDrawerNavigator({  
//     'Home': {  
//         screen: HomeStackNavigator  
//     },  
//     'Batch List': {  
//         screen: BatchListStackNavigator  
//     },  
// });  
  
// const AppSwitchNavigator = createSwitchNavigator({  
//     Home: { screen: AppDrawerNavigator },  
//     batchList: { screen: Batchlist },  
  
// });  
  
// const AppContainer = createAppContainer(AppSwitchNavigator);  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         alignItems: 'center',  
//         justifyContent: 'center'  
//     },
   
// });  






// import { StatusBar } from "expo-status-bar";
// import React from 'react';
// import { Appbar } from "react-native-paper";
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//     const navigation = useNavigation(); // for navigating between screens
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Appbar style={styles.bottom}>
//                 <Appbar.Action
//                     icon="archive"
//                     onPress={() => navigation.navigate('ClassSelection')}
//                 />
//             </Appbar>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Show QR Code"
//                 onPress={() => navigation.navigate('QRCode')}
//             />
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// export default Home;

// const styles = StyleSheet.create({
//     bottom: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//     },
// });