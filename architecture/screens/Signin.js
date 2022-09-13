import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../Theme/Theme';

export function Signin({navigation}) {

    const [email, setEmail] = useState('')
    const [passWord, setPassword] = useState('')

    function signInUser (){ 

    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={(text) => setEmail(text)}

            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Signup')}}>
                    <Text style={{ color:'red', fontWeight:'bold', fontSize:17}} >Sign up</Text>
                </TouchableOpacity> 
            </View>
            <Button color={Theme.colors.ui.primary} style={styles.btn} mode='contained' onPress={signInUser}>Sign Up</Button>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignContent: 'center'
    },
    email:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    passWord:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    signinText:{
        
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signinBar:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn:{
     marginTop:60,
     alignSelf:'center',
     width:'95%',
     height:40   
    }
})