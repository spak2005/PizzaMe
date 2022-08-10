import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";


export function Popular({route,navigation}){
    
    const {pizzaImg,pizzaName,pizzaRating,pizzaPrice} = route.params;
     
     
        color1 = '' 
        color2 = '' 
        color3 = '' 
        color4 = '' 
        color5 = '' 
        fontName1 = faStar    
        fontName2= faStar
        fontName3 = faStar
        fontName4 = faStar
        fontName5 = faStar
        switch (pizzaRating) {
            case 1.0:
            case 1.1:
            case 1.2:
            case 1.3:
             color1 = '#FF9F45'
             color2 = '#fff'
             color3 = '#fff'
             color4 = '#fff'
             color5 = '#fff'
             fontName1 = faStar
                break;
            case 1.4:
            case 1.5:
            case 1.6:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#fff'
             color4 = '#fff'
             color5 = '#fff'
             fontName1 = faStar
             fontName2 = faStarHalfStroke
                break;
            case 2.0:
            case 2.1:
            case 2.2:
            case 2.3:
            case 1.7:
            case 1.8:
            case 1.9:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#fff'
             color4 = '#fff'
             color5 = '#fff'
             fontName1 = faStar
             fontName2 = faStar
            case 2.4:
            case 2.5:
            case 2.6:
                 color1 = '#FF9F45'
                 color2 = '#FF9F45'
                 color3 = '#FF9F45'
                 color4 = '#fff'
                 color5 = '#fff'
                 fontName1 = faStar
                 fontName2 = faStar  
                 fontName3 = faStarHalfStroke  
                break;
            case 3.0:
            case 3.1:
            case 3.2:
            case 2.7:
            case 2.8:
            case 2.9:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#FF9F45'
             color4 = '#fff'
             color5 = '#fff'
             fontName1 = faStar
             fontName2 = faStar
             fontName3 = faStar

            break;
            case 3.4:
            case 3.5:
            case 3.6:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#FF9F45'
             color4 = '#FF9F45'
             color5 = '#fff'
             fontName1 = faStar
             fontName2 = faStar
             fontName3 = faStar
             fontName4 = faStarHalfStroke
            case 4.0:
            case 4.1:
            case 4.2:
            case 4.3:
            case 3.7:
            case 3.8:
            case 3.9:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#FF9F45'
             color4 = '#FF9F45'
             color5 = '#fff'
             fontName1 = faStar
             fontName2 = faStar
             fontName3 = faStar
             fontName4 = faStar
                
             break;
             case 4.4:
             case 4.5:
             case 4.6:
              color1 = '#FF9F45'
              color2 = '#FF9F45'
              color3 = '#FF9F45'
              color4 = '#FF9F45'
              color5 = '#FF9F45'
              fontName1 = faStar
              fontName2 = faStar
              fontName1 = faStar
              fontName2 = faStarHalfStroke
             case 4.7:
             case 4.8:
             case 4.9:
             case 5.0:
             color1 = '#FF9F45'
             color2 = '#FF9F45'
             color3 = '#FF9F45'
             color4 = '#FF9F45'
             color5 = '#FF9F45'
             fontName1 = faStar
             fontName2 = faStar
             fontName3 = faStar
             fontName4 = faStar
             fontName5 = faStar
               
                break;   
            default:
                break;
        }
       
    

    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Image 
                style={styles.thumbnail}
                source={{uri: pizzaImg}}/>
                <View style={styles.pizzaDetails}>
                    <Text style={styles.title}>{pizzaName}</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={fontName1} size={24} color={color1} style={{marginRight:5}}/>
                            <FontAwesomeIcon icon={fontName2} size={24} color={color2} style={{marginRight:5}}/>
                            <FontAwesomeIcon icon={fontName3} size={24} color={color3} style={{marginRight:5}}/>
                            <FontAwesomeIcon icon={fontName4} size={24} color={color4} style={{marginRight:5}}/>    
                            <FontAwesomeIcon icon={fontName5} size={24} color={color5} style={{marginRight:5}}/> 
                        </View>
                    <Text style={styles.price}>NGN{pizzaPrice}</Text>
                </View>
                              
            </View>
                <View style={styles.delivery}>
                    <Text style={styles.heading}>Order {pizzaName}</Text>
                    <TextInput keyboardType='default' placeholder="first name" style={styles.input}/>
                    <TextInput keyboardType='default' placeholder="last name" style={styles.input}/>
                    <TextInput keyboardType='email-address' placeholder="email adress" style={styles.input}/>
                    <TextInput keyboardType='numeric' placeholder="phone number" style={styles.input}/>
                    <TouchableOpacity style={styles.orderNow}>
                        <Text style={styles.orderNowText}>Order Now</Text>
                    </TouchableOpacity>
                </View>
               
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,



    },
    details:{
        flexDirection:'row',
        backgroundColor:'#D9F8C4',
        padding:10,

    },
    thumbnail:{
        width:100,
        height:100,
        marginRight:18


    },
    pizzaDetails:{
        justifyContent:'space-between'
    },
    title:{
        fontSize:28,
        fontWeight:'bold'

    },
    rating:{
        flexDirection:'row',
        

    },
    delivery:{

    },
    price:{
        fontSize:18

    },
    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:16
    }
    ,
    input:{
        borderWidth:1,
        borderColor:'gray',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        marginBottom:10,
        backgroundColor:'#fff'
        
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