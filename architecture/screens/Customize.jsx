import { View, Text } from "react-native";

const pizzas = [
    {
        pizzaName: 'Formaggio',
        ingredients: [
            {ingreName:'mozzarella',fee:20,id:21},
            {ingreName:'parmesan',fee:30,id:22},
            {ingreName:'provolone',fee:10,id:23},
            {ingreName:'blue cheese',fee:50,id:24}
        ]
    },
    {
        pizzaName: 'Prosciutto',
        ingredients: [
            {ingreName:'Pizza sauce',fee:12,id:25},
            {ingreName:'mozzarella',fee:25,id:26},
            {ingreName:'prosciutto',fee:40,id:27},
            {ingreName:'rocket/arugula',fee:35,id:28},
            {ingreName:'extra virgin olive oil',fee:25,id:229}
        ]
    },
];

export function Customize (){
    return(
        <Text>Customize</Text>
    )
}