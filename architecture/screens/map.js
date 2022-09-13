import { View, StyleSheet, Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import MapView,{PROVIDER_GOOGLE} from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import  Constants  from "expo-constants";
import { Theme } from "../Theme/Theme";

const Title = styled(Text)`
    color:${Theme.colors.text.secondary};
    margin-bottom:${Theme.space[2]};
    font-size:${Theme.fonts.fontSize.title}
`;


const {width,height} = Dimensions.get('window');
const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 9.055255305727574, 
  longitude: 7.489606969426971,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

export function Maps (){
    return(
        <>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION}/>

            <View style={styles.mapAutoComplete}>
                <GooglePlacesAutocomplete
                 placeholder="Search"
                 query={{
                    key:'AIzaSyBEywKubvr28MnLtrbT5SyiUrbk_4zYkVc',
                    language:'en'
                 }}
                 fetchDetails={true}
                 enablePoweredByContainer={false}
                 onPress={(data, details = null) => {
                    console.log(details.geometry.location.lat)
                 }}
                 minLength={2}/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    map:{
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    mapAutoComplete:{
        position:'absolute',
        top:Constants.statusBarHeight,
        padding:8,
        borderRadius:8,
        backgroundColor:'#fff',
        shadowColor:'black',
        shadowOffset:{width:4, height:4},
        shadowRadius:4,
        shadowOpacity:0.5,
        elevation:5,
        width:'90%',
        alignSelf:'center'
    }
});
