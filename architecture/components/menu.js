import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export function Menu () {
    return (
        <View style={styles.horDisplay}>
            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faHouseChimney} style={styles.icon} size={36} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faTruck} style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faWallet} style={styles.order} size={42} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faBell} style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faCircleUser} style={styles.icon} size={27} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    horDisplay: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        padding:10,
        position:'absolute',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        bottom:-7,
        left:0,
        right:0
    },
    icon: {
        width:60,
        height:60,
        backgroundColor:'#F76E11',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    order:{
        width:80,
        height:80,
        backgroundColor:'#F76E11',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    }
});