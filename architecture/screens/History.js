import { View, Text, StyleSheet, FlatList } from "react-native";

export function History (){

const HistoryData = 
    [
    {pizzaName:'Perperoni', price:'4500', statusD:'Delivered', date:'23/12/2029', time:'05:06', payment:'credit', id:'key1'},
    {pizzaName:'parmesan',  price:'3500',  statusD:'Delivered', date:'05/6/2022',  time:'10:23', payment:'debit',  id:'key2'},
    {pizzaName:'Mozzarella', price:'5500', statusD:'Terminated', date:'09/7/2016', time:'05:30', payment:'credit', id:'key3'},
    {pizzaName:'Perperoni', price:'3000', statusD:'Delivered', date:'11/10/2039', time:'12:00', payment:'debit', id:'key4'},
    {pizzaName:'Provolone', price:'5000', statusD:'Delivered', date:'03/7/2012', time:'04:40', payment:'credit', id:'key5'},
    {pizzaName:'Chicken', price:'2900', statusD:'Terminated', date:'01/4/2012', time:'15:00', payment:'debit', id:'key6'},
]


    return(
        
            <FlatList data={HistoryData} renderItem={({item})=>{
                return(
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.priceName}>
                                <Text style={styles.priceText}>N{item.price}</Text>
                                <Text style={styles.nameText}>{item.pizzaName}</Text>
                            </View>
                            <View style={styles.dateTime}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                            <View style={styles.statusView}>
                                <Text style={styles.statusDev}>{item.statusD}</Text>
                            </View>
                            <Text style={styles.paymentMethod}>{item.payment}</Text>

                        </View>
                    </View>
                )
            }}/>

          
    )
}

const styles = StyleSheet.create({
   
    container:{
        marginVertical:10
    },
    header:{
        backgroundColor:'#FFBC80',
        borderRadius:15,
        //height:120,
        width:340,
        alignSelf:'center',
        padding:10
    },
    priceName:{
        
       
    },
    priceText:{
        fontWeight:'bold',
        fontSize:16,
        marginLeft:0,
        color:'green',
    },
    nameText:{
        fontWeight:'400',
        fontSize:30,
        marginLeft:50,



},
    dateTime:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
},
    date:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:21
},
    time:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:21

},
statusView:{
    width:100,
    backgroundColor:'rgba(128,128,128,0.5)',
    justifyContent:'center',
    borderRadius:20,
    paddingVertical:5,
    marginBottom:-10
    
},
    statusDev:{   
        fontWeight:'bold',
        fontSize:17,
        alignSelf:'center'

},
    paymentMethod:{
        marginLeft:260,
        color:'gray'
}


})