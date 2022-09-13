import {View, StyleSheet, Text, Image,TouchableOpacity, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Theme } from '../Theme/Theme'


export function Profile (){
    return(
        <View style={styles.container}>
            <View style={styles.bio}>
                <Image source = {require('../../assets/dad.jpg')}
                style={styles.bioImg}
                />
                <Text style={styles.bioName}>Vitalis Orugbo</Text>
                <Text style={styles.email}>vitalisorugbo@gmail.com</Text>

                <TouchableOpacity style={styles.editView}>
                    <Text style={styles.editDetails}>Edit details </Text>
                    <Image 
                    source={require('../../assets/edit.png')}
                    style={styles.editImg}/>
                </TouchableOpacity>
                
                {/* icon to modify detail */}
            </View>
            <View style={styles.details}>
            {/* This where the second section goes */}
                <View style={styles.detailsHolder}>
                    <Image 
                    source={require('../../assets/phone.png')}
                    style={styles.icons} />
                    <Text style={styles.detailsText}>08037268245</Text>
                </View>
                <View style={styles.detailsHolder}>
                <Image 
                    source={require('../../assets/world.png')}
                    style={styles.icons} />
                    <Text style={styles.detailsText}>Ikeja Lagos</Text>
                </View>
                <View style={styles.detailsHolder}>
                <Image 
                    source={require('../../assets/pin.png')}
                    style={styles.icons} />
                    <Text style={styles.detailsText}>Gado Nasko Road Block 3 Flat 1</Text>
                </View>
                <View style={styles.detailsHolder}>
                <Image 
                    source={require('../../assets/femalemale.png')}
                    style={styles.icons} />
                    <Text style={styles.detailsText}>Male</Text>
                </View>
                <View style={styles.detailsHolder}>
                <Image 
                    source={require('../../assets/star.png')}
                    style={styles.icons} />
                    <Text style={styles.detailsText}>Favourites</Text>
                </View>
                <View style={styles.changePasswordHolder}>
                <Image 
                    source={require('../../assets/key.png')}
                    style={styles.icons} />
                    <Text style={styles.changePasswordText}>Change Password</Text>
                </View>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Theme.colors.ui.secondary,
        flex:1,

    },
    bio:{
        backgroundColor:Theme.colors.ui.secondary,
        alignItems:'center',
        borderRadius:20
    },
    bioImg:{
        height:120,
        width:120,
        borderRadius:60,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20
       },
    bioName:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    email:{
        fontSize:14,
        fontWeight:'bold',

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
        height:40,
        width:140,
        backgroundColor:'#F76E11',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    details:{
        backgroundColor:'#fff',
        paddingVertical:20,
        borderTopStartRadius:30,
        borderTopRightRadius:30
    },
    detailsText:{
        fontSize:16,
        padding:12,
        
    },
    detailsHolder:{
        borderBottomWidth:2,
        borderBottomColor:'rgba(128,128,128,0.5)',
        marginBottom:15,
        flexDirection:'row',
        alignItems:'center'
    },
    changePasswordHolder:{
        marginBottom:15,
        borderBottomWidth:2,
        borderBottomColor:'rgba(128,128,128,0.5)',
        flexDirection:'row',
        alignItems:'center',
        
    },
    changePasswordText:{
        color:'red',
        fontSize:16,
        padding:12,
        
    },
    icons:{
        height:20,
        width:20,
        marginLeft:20,
    },
    arrows:{

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