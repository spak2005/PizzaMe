import { View,Text,StyleSheet,Dimensions,ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Theme } from "../Theme/Theme";
import {db} from '../Services/firebase'
import { setDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from "react-native-maps";

export function Checkout ({navigation,route}){
    const {
        price,
        pizzaName,
        ingredients,
        size,
        fname,
        lname,
        email,
        phone,
        lat,
        lon,
        address
    } = route.params;

    // other charges from paystack
    let otherCharges = 0;

    otherCharges = price * 0.015;

    //
    if(price >= 2500){
        otherCharges += 100;
    }

    //cap charges to 2000
    if(otherCharges > 2000){
        otherCharges = 2000;
    }
    
    let deliveryFee = 500;

    //total to pay
    const total = price + deliveryFee + otherCharges ;


    const {width,height} = Dimensions.get('window');
    const ASPECT_RATIO = width/height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const INITIAL_POSITION = {
    latitude: lat, 
    longitude: lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
    };

    //add values to an existing document
    function create () {
        const now = new Date();
        const nowTimestamp = now.getTime();

        addDoc(collection(db,'purchases'),{
            address: address,
            email:email,
            firstname:firstName,
            lastname:lastName,
            phone:phone,
            pizzaname:orderPizzaName,
            price:orderTotal,
            size:orderPizzaSize,
            timestamp:nowTimestamp
        })
        .then(() => {
            Alert.alert(
                'Order Confirmation',
                'We have received your customized pizza order.',
                [{text:'Okay, Thanks',onPress:() => {navigation.navigate('Home')}}]
            )
        })
        .catch(error => console.log('Error received',error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.addressView}>
                <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION}>
                    <Marker 
                    coordinate={{latitude:lat,longitude:lon}} 
                    title={address}/>
                </MapView>
            </View>
            <View style={styles.orderSummary}>
                <ScrollView>
                    <Text style={styles.summaryHeading}>Proceed to payment</Text>
                    <View style={styles.details}>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Pizza name</Text>
                            <Text style={styles.detailsText}>{pizzaName}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Item price</Text>
                            <Text style={styles.detailsText}>{price}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Delivery fee</Text>
                            <Text style={styles.detailsText}>{deliveryFee}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Other charges</Text>
                            <Text style={styles.detailsText}>{otherCharges}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Total</Text>
                            <Text style={styles.detailsText}>{total}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Full name</Text>
                            <Text style={styles.detailsText}>{fname + ' ' + lname}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>email</Text>
                            <Text style={styles.detailsText}>{email}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.detailsText}>Phone number</Text>
                            <Text style={styles.detailsText}>{phone}</Text>
                        </View>
                    </View>
                    <Button 
                    mode="outlined" 
                    color="white" 
                    style={
                        {marginTop:20,backgroundColor:Theme.colors.ui.primary}} 
                        contentStyle={{paddingVertical:20}
                    }
                    onPress={() => navigation.navigate('Pay',{
                        price:total,
                        pizzaName:pizzaName,
                        fname:fname,
                        lname:lname,
                        email:email,
                        phone:phone,
                        address:address
                    })}
                    >
                    Pay NGN{total}
                </Button>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    addressView:{
        flex:3,
    },
    map:{
        height:'100%', 
        width:Dimensions.get('window').width,
    },
    orderSummary:{
        flex:3,
        padding:10
    },
    summaryHeading:{
        textAlign:'center',
        fontSize:30
    },
    details:{
        
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:8
    },
    detailsText:{
        fontSize:15
    }
})
