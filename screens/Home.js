import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation(); // for navigating between screens
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Appbar style={styles.bottom}>
                <Appbar.Action
                    icon="archive"
                    onPress={() => navigation.navigate('ClassSelection')}
                />
            </Appbar>
            <Text>Home Screen</Text>
            <Button
                title="Show QR Code"
                onPress={() => navigation.navigate('QRCode')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
});