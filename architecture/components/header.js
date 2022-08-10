import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Overpass_100Thin, Overpass_200ExtraLight } from '@expo-google-fonts/overpass';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Theme/Theme';


export function Header () {
    let [FontsLoaded] = useFonts({
        Overpass_200ExtraLight,
        Overpass_100Thin
    });

    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                
                <Text style={styles.brandName}>pizzame</Text>
            </View>
            <TouchableOpacity style={styles.siginIcon}>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={Theme.points[4]}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center',
        paddingTop:Theme.points[2],
    },
    brand: {
        flexDirection:'row'
    },
    logo: {
        width: 48,
        height: 48,
        marginRight:Theme.points[1]
    },
    siginIcon:{
        width: 40,
        height:40
    },
    brandName: {
        fontSize:Theme.points[4],
        fontWeight:'bold',
        fontFamily: 'Overpass_100Thin',
    },
});