import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/intro';
import { Home } from '../screens/HomeScreen'
import { Popular } from '../screens/Popular';

export function AuthNavigator(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:'#FFBC80'
                },
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20
                },
                headerBackTitle:'Go back'
                }} />
        </Stack.Navigator>
    )
}