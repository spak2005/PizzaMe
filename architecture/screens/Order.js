import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Theme } from "../Theme/Theme";
import { db } from "../Services/firebase";
import { setDoc, doc } from 'firebase/firestore'


export function Order({navigation, route}){

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');



    const {orderTotal, orderPizzaName, orderPizzaIngredients, orderPizzaSize} = route.params

    //add values to an existing document
    function create (){
        setDoc(doc(db, 'purchases', ''), {})
    }

    return(
        <View style = {styles.container}>
            {/* first name, last name, phone, email, adress */}
            
            <View style={styles.delivery}>
                <Text style={styles.heading}>Order {orderPizzaName} pizza</Text>
                <TextInput keyboardType='default' placeholder="first name" style={styles.input}
                onChangeText={(fname) => {setFirstname(fname)}}/>
                <TextInput keyboardType='default' placeholder="last name" style={styles.input}
                onChangeText={(lname) => {setLastname(lname)}}/>
                <TextInput keyboardType='email-address' placeholder="email adress" style={styles.input}
                onChangeText={(email) => {setEmail(email)}}/>
                <TextInput keyboardType='numeric' placeholder="phone number" style={styles.input}
                onChangeText={(phone) => {setPhone(phone)}}/> 
                <TextInput keyboardType='de' placeholder="phone number" style={styles.input}
                onChangeText={(phone) => {setPhone(phone)}}/> 
            </View>

            <Button mode='outlined'color="#fff" style={{
                    marginTop:30,
                    backgroundColor:Theme.colors.ui.primary,
                    }}
                    contentStyle={{padding:10,}}
                    onPress={() => {
                       
                    }}
                    >
                    Complete your order
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        marginBottom:10,
        backgroundColor:'#fff'
        
    },
    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:16
    },
    orderNow:{
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        backgroundColor:'#064635' 
    },
    orderNowText:{
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff'
    }
})


// Alert.alert(
//     'Order Confirmation',
//     'We have recieved your order',
//     [{text:'Accept', onPress:() => {console.log('Accepted')}}, {text:'Cancel'}]
// )