import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Theme } from "../Theme/Theme";
import { db } from "../Services/firebase";
import { setDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


export function Order({navigation, route}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);
    const [addressDetails,setAddressDetails] = useState('');




    const {
        orderTotal,
        orderPizzaName,
        orderPizzaIngredients,
        orderPizzaSize
    } = route.params;


    //add values to an existing document
    


    //update documents on firestore
    function updateDocument (){
        updateDoc(collection(db, 'purchases'), {
            firstname:'Uzo',
            lastname:'Michael'
        })
        .then(()=>{})
    }
    return(
        <View style={styles.parent}>
            <ScrollView>
            <View style = {styles.container}>
                {/* first name, last name, phone, email, adress */}
                
                <View style={styles.delivery}>
                    <Text style={styles.heading}>Order {orderPizzaName} pizza of ₦{orderTotal}</Text>
                    <TextInput keyboardType='default' placeholder="first name" style={styles.input}
                    onChangeText={(fname) => {setFirstName(fname)}}/>
                    <TextInput keyboardType='default' placeholder="last name" style={styles.input}
                    onChangeText={(lname) => {setLastName(lname)}}/>
                    <TextInput keyboardType='email-address' placeholder="email adress" style={styles.input}
                    onChangeText={(email) => {setEmail(email)}}/>
                    <TextInput keyboardType='numeric' placeholder="phone number" style={styles.input}
                    onChangeText={(phone) => {setPhone(phone)}}/> 
                </View>

                

            </View>

            <View style={styles.mapLocation}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    query={{
                        key:'AIzaSyAltTdZ5mgwXmOAdeDKLqKf8OfJovDQWBI',
                        language:'en'
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        console.log(details.geometry.location.lat)
                    }}
                    minLength={2}/>
            </View>

            <View style={styles.submit}>
                <Button mode='outlined'color="#fff" style={{
                        marginTop:30,
                        backgroundColor:Theme.colors.ui.primary,
                        }}
                        contentStyle={{padding:10,}}
                        onPress={() => navigation.navigate('Checkout',{
                            price:orderTotal,
                            pizzaName:orderPizzaName,
                            ingredients:orderPizzaIngredients,
                            size:orderPizzaSize,
                            fname:firstName,
                            lname:lastName,
                            email:email,
                            phone:phone,
                            lat:latitude,
                            lon:longitude,
                            address:addressDetails
                        })}
                        >
                        Complete your order
                </Button>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        padding:10,
        flex:1
    },
    container:{  
        flex:2
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        marginBottom:5,
        backgroundColor:'#fff'
        
    },
    heading:{
        fontSize:18,
        textAlign:'center',
        marginBottom:10
    },
      mapLocation:{
        marginTop:2,
        flex:3,
        marginBottom:190,
    },
    submit:{
        flex:1,
    },
   
})


// Alert.alert(
//     'Order Confirmation',
//     'We have recieved your order',
//     [{text:'Accept', onPress:() => {console.log('Accepted')}}, {text:'Cancel'}]
// )