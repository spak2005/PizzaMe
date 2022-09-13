import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { data } from "../../assets/Data/DisplayedPizza";
import { Theme } from "../Theme/Theme";
import { pizzaSizes } from "../../assets/Data/pizzas";


export function About ({navigation, route}){

    const [total, setTotal] = useState(0);
    const [sizeName, setSizeName] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')
    const [addressDetails, setAddressDetails] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

   const {pizzaName, pizzaImg, note} = route.params;

    return(
        <View style={styles.container}>
            <Card style={{margin:10, paddingVertical:20, backgroundColor:Theme.colors.ui.secondary}}>
                <View style={styles.topHolder}>
                    <Text style={styles.price}>Price: ₦{total}</Text>
                    <Title style={styles.pizzaName}>{pizzaName}</Title>
                </View>
                <Card.Cover source={{ uri: pizzaImg }} style={styles.img}/>
                <Card.Content>
                        <Paragraph>{note}</Paragraph>
                </Card.Content>
            </Card>
            <View style={styles.sizes}>
                {/* available sizes */}
                {Object.values(pizzaSizes).map((item) => (
                    <TouchableOpacity
                    style={styles.sizeTouch}
                    onPress={()=>{
                        setTotal( item.fee);
                        setSizeName(item.sizeName);
                    }}
                    >
                        <Text style={styles.sizeTitle}>{item.sizeName}</Text>  
                    </TouchableOpacity>
                ))}        
            </View>
            
            <Button mode='outlined'color="#fff" style={{
                    marginTop:10,
                    backgroundColor:'#064635'
                    }}
                    contentStyle={{padding:10,}}
                    onPress={() => {
                        navigation.navigate('Order',{
                            orderTotal:total,
                            orderPizzaName:pizzaName,
                        });
                    }}>
                    Continue to delivery
                    </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: Theme.points[1],
    },
    topHolder:{
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        height:350
    },
    price:{
        color:'#519259',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:20
    },
    pizzaName:{
        fontSize:30,
    },
    sizes:{
        paddingTop:90,
        flexDirection:'row',
        justifyContent:'space-around'
    
    },
    sizeTouch:{
        borderWidth:1,
        borderColor:'#519259',
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:10,
        marginRight:5,
    },
    sizeTitle:{
        color:'#064',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    
    },
})