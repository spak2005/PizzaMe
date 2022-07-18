import { View, Text, StyleSheet, ScrollView, } from "react-native";


export function Testing() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.item, {backgroundColor:'red'}]}></View>
                <View  style={[styles.item, styles.green,{backgroundColor:'green',}]}></View>
                <View  style={[styles.item, styles.blue, {backgroundColor:'blue'}]}></View>
                <View style={styles.big}></View>
                <View style={styles.big}></View>
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'skyblue',
        padding:10,
    },
    item:{
        width:120,
        height:120,
        borderWidth:1,
        
    },
    big:{
        height:600,
        width:'100%',
        backgroundColor:'gray',
    },
    green:{
        position:'relative',
        left:120
    },
    blue:{
        position:'relative',
        left:120,
        
        top:-240 
    }
});