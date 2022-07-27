import { View, Text, Button } from "react-native";

export function Notifications (){
    return(
        <View>
            <Text></Text>
            <Button title="click here" onPress={(item)=>{
                alert('hello customer')
            }}
            ></Button>
        </View>
    )
}