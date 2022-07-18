import { View, Image, Text, StyleSheet } from 'react-native';
import { useFonts,Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export function Header () {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Image 
                    source={require('../../assets/images/pizza.png')}
                    style={styles.logo}
                />
                <Text style={styles.brandName}>pizzame</Text>
            </View>
            <Image 
                source={require('../../assets/images/login.png')}
                style={styles.siginIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    brand: {
        flexDirection:'row'
    },
    logo: {
        width: 48,
        height: 48,
        marginRight:5
    },
    siginIcon:{
        width: 40,
        height:40
    },
    brandName: {
        fontSize:32,
        fontWeight:'bold',
        fontFamily:'Pacifico_400Regular',
    },
});