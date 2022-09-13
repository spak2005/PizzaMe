import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../Theme/Theme';
import { authentication } from '../Services/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export function Signup({navigation}) {
    let auth = getAuth();
    const [email, setEmail] = useState();
    const [passWord, setPassword] = useState('');

    function createUser (){ 
        createUserWithEmailAndPassword(auth, email, passWord)
        .then (userCredentials => console.log(userCredentials.user))
        .catch (error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text 
            style={{fontSize:Theme.points[4],marginLeft:10, textAlign:'center', color:Theme.colors.ui.primary}}
            >Create a new account</Text>
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text  style={{ color:'red', fontWeight:'bold', fontSize:17}}  >Sign in</Text>
                </TouchableOpacity>  
            </View>
            <Button 
                color={Theme.colors.ui.primary} 
                style={styles.btn} mode='contained' 
                onPress={createUser}
                >
                Sign Up</Button>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
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