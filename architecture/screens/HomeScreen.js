import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components/header';
// import { Menu } from '../components/menu';
import { About } from './About';
import { History } from './History';
import { Profile } from './Profile';
import { Customize } from './Customize';
import { Notifications } from './Notifications';
import { Ionicons } from '@expo/vector-icons';

const data = {
    favourites: [
        { name: 'mozzarella', id: '1', price:4250, rating:2.5, thumbnail: 'https://www.guardini.com/media/zoo/images/pizza_basilico_d48383f64dd294fcf26b3763d103fd6f.jpg' },
        { name: 'parmesan', id: '2', price:4500, rating:4.1, thumbnail: 'https://image.shutterstock.com/image-photo/delicious-pizza-served-on-wooden-600w-529633279.jpg' },
        { name: 'provolone', id: '3', price:3500, rating:1.0, thumbnail: 'https://thumbs.dreamstime.com/b/pepperoni-pizza-white-background-13791751.jpg' },
        { name: 'blue cheese', id: '4', price:4500, rating:4.9, thumbnail: 'https://thumbs.dreamstime.com/b/pizza-3984993.jpg' },
        { name: 'broccoli', id: '5',price:5000, rating:1.5, thumbnail: 'https://thumbs.dreamstime.com/b/pepperoni-pizza-hand-taking-slice-61831527.jpg' }
    ],
    bakersChoice: [
        { name: 'pancetta', id: '6', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg' },
        { name: 'speck', id: '7', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg' },
        { name: 'anchovies', id: '8', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' },
        { name: 'zucchini', id: '9', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg' },
        { name: 'pancetta', id: '10', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' }
    ]
}

 function HomeScreen({navigation}) {

    return (
        <View style={styles.container} >
            <Header />

            <TextInput
                placeholder='search for a topin'
                outlineColor='#FF9F45'
                underlineColor='#F76E11'
                style={styles.search}
            />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Polular topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.popularItem} onPress={() => {
                            navigation.navigate('Popular', {
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

            {/* baker's choice */}
            <View style={styles.bakersChoice}>
                <Text style={styles.popularHeadingText}>Baker's choice</Text>
                <FlatList data={data.bakersChoice} renderItem={({ item }) => {
                    return (
                        <Card style={{marginBottom:10}}>
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                                <Paragraph>{item.note}</Paragraph>
                                <Button mode='contained' color='coral'>Order</Button>
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
        flex: 1,
        paddingHorizontal: 20
    },
    search: {
        marginVertical: 20,
        backgroundColor: '#FAEEE0'
    },
    popularHeadingText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5
    },
    popularItem: {
        width: 120,
        height: 120,
        paddingVertical: 18,
        paddingHorizontal: 18,
        backgroundColor: '#FF9F45',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15

    },
    popularItemText: {
        color: '#4A403A',
        fontWeight: 'bold'
    }
});