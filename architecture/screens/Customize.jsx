import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { pizzas } from "../../assets/Data/pizzas";
import { pizzaSizes } from "../../assets/Data/pizzas";
import { Order } from "./Order";
import { Theme } from "../Theme/Theme";


export function Customize ({navigation,route}){

    

    const [selected, setSelected] = useState({});
    const [total, setTotal] = useState(0);
    const [pizzaNames, setPizzaNames] = useState('');
    const [pizzaSpice, setPizzaSpice] = useState ([]);
    const [sizeName, setSizeName] = useState('')

    function ProccedToDelivery(){
        if (total > 0){
            return <Button mode='outlined'color="#fff" style={{
                    marginTop:10,
                    backgroundColor:'#064635'
                    }}
                    contentStyle={{padding:10}}
                    onPress={() => {
                        navigation.navigate('Order',{
                            orderTotal:total,
                            orderPizzaName:pizzaNames,
                            orderPizzaIngredents:pizzaSpice,
                            orderPizzaSize:sizeName
                        });
                    }}>
                    Continue to delivery
                    </Button>
            }
    }

    return(
        <ScrollView style ={styles.container}>
            <Text style={styles.heading}>Customize Your Order </Text>
            {/*Pizza billing Total */}
            <View style ={styles.billing}>
                <Text style={styles.pizzaBillingTitle}>Price Total</Text>
                <Text style={styles.pizzaBillingValue}>₦{total}</Text>
                <Text style={styles.pizzaBillingTitle}>{pizzaNames} with Ingredients({pizzaSpice})</Text>

            </View>

            {/*select pizza to show ingredient */}
            <ScrollView horizontal>
                {Object.values(pizzas).map((singlePizza)=> (
                    <TouchableOpacity
                     style ={styles.selectedPizza} 
                     onPress={() => {
                     setSelected(singlePizza.ingredients);
                     setPizzaNames(singlePizza.pizzaName)
                     }}
                     >
                        <Text style ={styles.selectedTitle}>
                            {singlePizza.pizzaName}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
                
            {/* ingredients based on selected pizzas */}
            <View style={styles.pizzas}>
                {
                    Object.values(selected).map(item => (
                        <TouchableOpacity
                         style={[styles.pizza,{ marginRight:Math.round(Math.random()*10), marginLeft:Math.round(Math.random()*100),}]}
                         onPress={()=>{
                            setTotal(total + item.fee);
                            setPizzaSpice([pizzaSpice,...item.ingreName,', ']);

                         }}
                         >
                             <Text style={styles.pizzaTitle}>{item.ingreName}</Text>
                        </TouchableOpacity>
                    ))
                }

               

            </View>

             {/* available sizes */}
             <View style={styles.sizes}>
                {Object.values(pizzaSizes).map((item) => (
                    <TouchableOpacity
                     style={styles.sizeTouch}
                     onPress={()=>{
                        setTotal(total + item.fee);
                        setSizeName(item.sizeName);
                     }}
                     >
                        <Text style={styles.sizeTitle}>{item.sizeName}</Text>  
                    </TouchableOpacity>
                ))}
                
                {/* available sizes */}
           
                
             </View>
             {/*Continue to delivery */}
                {ProccedToDelivery()}    
    </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    container:{
        padding:15,
    },
    heading:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'bold',
        color:'#519259'
    },
    pizzas:{
        marginTop:20
    },
    pizza:{
        backgroundColor:Theme.colors.ui.secondary,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        marginBottom:5,
        
    },
    pizzaTitle:{
        fontSize:20,
        fontWeight:'bold'
},
    selectedPizza:{
        backgroundColor:'#064635',
        marginRight:5,
        paddingHorizontal:10,
        paddingVertical:20,
        borderRadius:10
},
    selectedTitle:{
        color:'#fff',
        fontWeight:'bold',
        
},
sizes:{
    marginTop:20,
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
billing:{
    backgroundColor:Theme.colors.ui.secondary,
    marginBottom:20,
    marginTop:20,
    borderRadius:10
},
pizzaBillingTitle:{
    color:'gray',
    textAlign:'center'

},
pizzaBillingValue:{
    fontSize:38,
    textAlign:'center'
},
})