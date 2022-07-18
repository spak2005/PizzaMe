import {View, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



export function Profile (){
    return(
        <View style={styles.container}>
            <View style={styles.bio}>
                <Image source = {require('../../assets/dad.jpg')}
                style={styles.bioImg}
                />
                <Text style={styles.bioName}>Vitalis Orugbo</Text>

                <TouchableOpacity style={styles.editView}>
                    <Text style={styles.editDetails}>Edit details </Text>
                    <Image 
                    source={require('../../assets/edit.png')}
                    style={styles.editImg}/>
                </TouchableOpacity>
                
                {/* icon to modify detail */}
            </View>
            <View style={styles.details}>

                <View style={styles.adress}>
                        {/* icon */}
                        <Text style={styles.adressText}>Adress: Flat 3 Block 1 emotan street, Kubwa</Text>
                </View>

                <View style={styles.city}>
                    {/* icon */}
                    <Text style={styles.cityText}>City: Abuja</Text>
                </View>
                
            </View>

            <View style={styles.password}>
                    <Text>Password: #C**************0K</Text>
            </View>

            <View style={styles.emailAdress}>
                    <Text>Email Adress: spark234@gmail.com</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{},
    bio:{
        backgroundColor:'#FFBC80',
        alignItems:'center',
        borderRadius:20
    },
    bioImg:{
        height:120,
        width:120,
        borderRadius:60,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:5
       },
    bioName:{
        fontSize:20,
        fontWeight:'bold'
    },
    email:{
        fontSize:14
    },
    editDetails:{
        fontSize:16

    },
    editImg:{
        height:20,
        width:20,
    },
    editView:{
        flexDirection:'row',
        marginVertical:5,
        height:50,
        width:140,
        backgroundColor:'#F76E11',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    
    adress:{
        backgroundColor:'#FFBC80', 
        width:350,
        alignSelf:'center',
        borderRadius:20,
        padding:20,
        marginVertical:20
    },
    city:{
        backgroundColor:'#FFBC80', 
        width:350,
        alignSelf:'center',
        borderRadius:20,
        padding:20,
        marginBottom:20
        
    },
    password:{
        backgroundColor:'#FFBC80', 
        width:350,
        alignSelf:'center',
        borderRadius:20,
        padding:20,
        marginBottom:20
    },
    emailAdress:{
        backgroundColor:'#FFBC80', 
        width:350,
        alignSelf:'center',
        borderRadius:20,
        padding:20,
        marginBottom:20
    }
})