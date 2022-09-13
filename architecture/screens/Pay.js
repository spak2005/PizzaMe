import { View, Alert } from "react-native";
import React from 'react';
import { Paystack } from "react-native-paystack-webview";

export function Pay({navigation,route}){
  const {price, email, phone} = route.params;
  return(
    <View style={{ flex: 1 }}>
    <Paystack  
      paystackKey="your-public-key-here"
      amount={'25000.00'}
      billingEmail="paystackwebview@something.com"
      activityIndicatorColor="green"
      onCancel={(e) => {
        // handle response here
      }}
      onSuccess={(res) => {
        // handle response here
        Alert.alert(
          'Payment Status',
          `Your payment of ${price} was successful`,
          [{text:'Return to Customize', onPress:navigation.navigate('Customize')}]
        )
      }}
      autoStart={true}
    />
  </View>
  )
}