import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
// import { Button, Paragraph, Portal } from "react-native-paper";
import Dialog from "react-native-dialog";

import { useNavigation } from '@react-navigation/native';


const ClassSelection = () =>{
    const navigation = useNavigation();

    return(
        <View>
            <Dialog.Container visible={true}>
                {/* <Dialog.Title>Do you want to take python batch?</Dialog.Title> */}
                <Dialog.Description>Do you want to take python batch?</Dialog.Description>
                <Dialog.Button label="Cancel" onPress={() =>navigation.goBack()}/>
                <Dialog.Button label="Yes" onPress={() =>navigation.goBack()}/>
            </Dialog.Container>
        </View>
    );
}

export default ClassSelection;


// const QRCodeDialog = () =>{

//     const [visible, setVisible] = React.useState(false);

//     const showDialog = () => setVisible(true);

//     const hideDialog = () => setVisible(false);

// return(
// <View>
//     <Portal>
//         <Dialog visible = {visible} onDismiss={hideDialog}>
//             <Dialog.Title>Batch Selection</Dialog.Title>
//             <Dialog.Content>
//                 <Paragraph>Are you taking Python-1 batch?</Paragraph>
//             </Dialog.Content>
//             <Dialog.Actions>
//                 <Button onPress={hideDialog}>No</Button>
//             </Dialog.Actions>
//         </Dialog>
//     </Portal>
// </View>
// );
// }

// export default QRCodeDialog;