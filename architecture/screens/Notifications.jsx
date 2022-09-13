import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../Theme/Theme";

export function Notifications (){
    return(
        <View>
            <Text style={styles.defaultText}> You haven't recieved notifications yet</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    defaultText:{
        fontSize:20,
        textAlign:'center',
        color:Theme.colors.ui.secondary

    }
})