import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History } from './History';
import { Profile } from './Profile';
import { Customize } from './Customize';
import { Notifications } from './Notifications';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../Theme/Theme';
import { data } from '../../assets/Data/DisplayedPizza';




 function HomeScreen({navigation}) {

    return (
        <View style={styles.container} >
             <View style={styles.header}>
                <View style={styles.brand}>
                    
                    <Text style={styles.brandName}>pizzame</Text>
                </View>
                <TouchableOpacity style={styles.siginIcon} onPress={()=> navigation.navigate('Signin')}>
                    <FontAwesomeIcon icon={faArrowRightToBracket} size={Theme.points[4]}/>
                </TouchableOpacity>
            </View>

            <TextInput
                placeholder='search for a topin'
                style={styles.search}
            />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Polular topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.popularItem} onPress={() => {
                            navigation.push('Popular', {
                                pizzaImg:item.thumbnail,
                                pizzaName:item.name,
                                pizzaRating:item.rating,
                                pizzaPrice:item.price
                            })
                        }}>
                            <Image source={{ uri: item.thumbnail }} style={{ width: 60, height: 60 }} />
                            <Text style={styles.popularItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }} key={({ item }) => { item.id }} horizontal />
            </View>
{/* baker's choice */ }
            <View style={styles.bakersChoice}>
                <Text style={styles.popularHeadingText}>Baker's choice</Text>
                <FlatList data={data.bakersChoice} renderItem={({ item }) => {
                    return (
                        <Card style={{marginBottom:10}}>
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                                  <Paragraph>{item.note}</Paragraph>
                                <Button mode='contained' color={Theme.colors.ui.secondary}
                                onPress={()=>{navigation.navigate('About', {
                                    pizzaName:item.name,
                                    pizzaImg:item.thumbnail,
                                    note:item.note

                                })}}>Order</Button>
                            </Card.Content>
                        </Card>
                    );
                }} key={({ item }) => { item.id }} />
            </View>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export function Home () {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HomeScreen') {
                iconName = focused? 'home': 'home-outline';
              } else if (route.name === 'History') {
                iconName = focused ? 'md-file-tray-stacked' : 'md-file-tray-stacked';
              }
              else if (route.name === 'Customize') {
                iconName = focused ? 'ios-logo-codepen' : 'ios-logo-codepen';
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
              }
              else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications-circle' : 'notifications-circle';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Customize' component={Customize} options={{headerShown:false}}/>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Notifications' component={Notifications}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: Theme.points[1],
        paddingHorizontal: Theme.space[3]
    },
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
    },
    search: {
        marginTop: Theme.space[3],
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical:Theme.space[3],
        borderRadius:50,
        borderColor:Theme.colors.ui.secondary,
        fontSize:Theme.points[3],
        borderWidth:1

    },
    popularHeadingText: {
        fontSize: Theme.fonts.fontSize.title,
        marginVertical: Theme.points[2],
    },
    popularItem: {
        width: Theme.sizes[4],
        height: Theme.sizes[4],
        paddingVertical: Theme.points[4],
        paddingHorizontal: Theme.points[2],
        backgroundColor: Theme.colors.ui.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Theme.points[2],
        

    },
    popularItemText: {
        color: Theme.colors.text.secondary,
        fontWeight: 'bold'
    }
});