import React from 'react';
import { StyleSheet, View, Button, Image, Alert } from 'react-native';

const QRCode = () => {
    // const navigation = useNavigation();
    const showDialog = () =>{
        Alert.alert(
            'Hello',
            'Are you taking this python batch?',
            [
            {text:'Yes', onPress: () => console.log('Yes')},
            {text:'No', onPress: () => console.log('No')}
            ]
        );
    }

    return (
        <View
            style={styles.container}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Allenton_Hippo_QR_Code.jpg' }}
                style={{ width: 200, height: 200, alignItems: 'flex-end' }}
            />
            <Button title="Back"
            onPress={showDialog} 
            />
        </View>
    );
}

export default QRCode;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    code: {
        flex: 1,

    },
});